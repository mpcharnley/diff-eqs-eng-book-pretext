import pymupdf
from pathlib import Path
import os
import subprocess

save_path = Path(__file__).parent

img_path = save_path.joinpath('figures')

fileNameFull = input('Input the full file name (including extension):\n')

if fileNameFull.endswith('.pdf'):
    fileName = fileNameFull[:-4]

    os.chdir(img_path)

    doc=pymupdf.open(fileName+".pdf")

    os.chdir(save_path)
    for page in doc:
        pix = page.get_pixmap(dpi=100)
        
        pix.save(fileName+".png")

elif fileNameFull.endswith('.pdf_t'):
    os.chdir(save_path)
    latexString = '\\documentclass{article}\n\n\\usepackage{ifpdf}\n\\usepackage{amsmath}\n\\usepackage{amsfonts}\n\\usepackage{amssymb}\n\\usepackage{amsthm}\n\\usepackage{graphicx}\n\\usepackage{color}\n\\usepackage{import}\n'
    latexString = latexString + '\\begin{document}\n\\thispagestyle{empty}\n\\subimport*{figures/}{'+fileNameFull+'}\n\\end{document}'

    with open('testImg.tex', 'w') as file:
        file.write(latexString)
    

    subprocess.check_call(['pdflatex', '-jobname', "TestImg", 'testImg.tex'])
    subprocess.check_call(['pdflatex', '-jobname', "TestImg", 'testImg.tex'])

    doc = pymupdf.open("TestImg.pdf")
    fileName = fileNameFull[:-6]

    for page in doc:
        boundRects = page.cluster_drawings()
        bbox = boundRects[0]
        for rect in boundRects[1:]:
            bbox.include_rect(rect)
        
        textBlocks = page.get_text_blocks()
        for r in textBlocks:
            bbox.include_rect(pymupdf.Rect(r[:4]))

        bufferedBox = bbox + (-10, -10, 10, 10)
        pix = page.get_pixmap(clip=bufferedBox, dpi=200)
        pix.save(fileName+'.png')


