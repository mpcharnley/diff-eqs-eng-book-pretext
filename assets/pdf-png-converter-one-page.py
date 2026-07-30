import pymupdf
from pathlib import Path
import os
import subprocess

save_path = Path(__file__).parent

img_path = save_path.joinpath('figures')

fileNameFull = 'cartsfig.pdf_t'

if fileNameFull.endswith('.pdf'):
    fileName = fileNameFull[:-4]

    os.chdir(img_path)

    doc=pymupdf.open(fileName+".pdf")

    os.chdir(save_path)
    for page in doc:
        pix = page.get_pixmap(dpi=100)
        
        pix.save(fileName+".png")

elif fileNameFull.endswith('.pdf_t'):

    latexstring = '\\documentclass{article}\n\\usepackage{ifpdf}\n\\usepackage{amsmath}\n\\usepackage{amsfonts}\n\\usepackage{amssymb}\\n\\usepackage{amsthm}\n\\usepackage{graphicx}\n\\usepackage{color}\n\n'

    latexstring += '\\begin{document}\n'

    latexstring += '\\subimport*{figures/}{'+fileNameFull + '}'

    latexstring += '\\end{document}'

    subprocess.check_call(['pdflatex', '-jobname', "TestImg", latexstring])
    subprocess.check_call(['pdflatex', '-jobname', "TestImg", latexstring])

    doc = pymupdf.open("TestIng.pdf")
    fileName = fileNameFull[:-6]

    for page in doc:
        image_list = page.get_images()
        for image_index, img in enumerate(image_list, start=1): # enumerate the image list
            xref = img[0] # get the XREF of the image
            pix = pymupdf.Pixmap(doc, xref) # create a Pixmap

            if pix.n - pix.alpha > 3: # CMYK: convert to RGB first
                pix = pymupdf.Pixmap(pymupdf.csRGB, pix)

            pix.save(fileName+".png") # save the image as png
            pix = None


