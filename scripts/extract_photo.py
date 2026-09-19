"""Extract the profile photo embedded in the CV PDF and save a web-sized JPEG."""
import subprocess
import sys
from pathlib import Path

import fitz  # PyMuPDF

SOURCE = Path.home() / "Downloads" / "CV Andrey ES ConFoto.pdf"
IMAGES_DIR = Path(__file__).resolve().parent.parent / "assets" / "images"
TARGET = IMAGES_DIR / "profile.jpg"
MAX_SIDE_PX = 640


def largest_image(doc):
    best = None
    for page in doc:
        for info in page.get_images(full=True):
            xref, width, height = info[0], info[2], info[3]
            if best is None or width * height > best[1] * best[2]:
                best = (xref, width, height)
    return best


def main():
    if not SOURCE.exists():
        sys.exit(f"CV PDF not found: {SOURCE}")
    with fitz.open(SOURCE) as doc:
        found = largest_image(doc)
        if found is None:
            sys.exit("No embedded images found in the CV PDF")
        image = doc.extract_image(found[0])
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    raw = IMAGES_DIR / f"profile-original.{image['ext']}"
    raw.write_bytes(image["image"])
    subprocess.run(
        ["sips", "-s", "format", "jpeg", "-s", "formatOptions", "82", "-Z", str(MAX_SIDE_PX), str(raw), "--out", str(TARGET)],
        check=True, capture_output=True,
    )
    raw.unlink()
    print(f"{TARGET} (source {found[1]}x{found[2]})")


if __name__ == "__main__":
    main()
