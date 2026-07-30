import os
import subprocess
import time
import sys

from pathlib import Path

source_path = Path(__file__).parent
subfolders = [str(p) for p in source_path.iterdir() if p.is_dir()]

fileName = 'sec-pre-deriv-int'

for dir in subfolders:
    os.chdir(source_path.joinpath(dir))
    fileList = [f.name for f in Path('.').iterdir() if (f.is_file() and f.name.endswith('.ptx'))]

    for f in fileList:
        if f[:-4] == fileName:
            inSplit = False
            inAlign = False
            inMatrix = False
            changeLines = []
            fileOut = open(fileName+'_new.ptx', 'w')
            with open(f, 'r') as file:
                for line_num, line in enumerate(file):
                    if (inSplit or inAlign) and not inMatrix:
                        if '\\end{split}' in line:
                            fileOut.write('</mrow>\n')
                            inSplit = False
                        elif '\\end{align}' in line:
                            fileOut.write('</mrow>\n')
                            inAlign = False
                        elif '\\end{aligned}' in line:
                            fileOut.write('</mrow>\n')
                            inAlign = False
                        elif '\\end{align*}' in line:
                            fileOut.write('</mrow>\n')
                            inAlign = False
                        elif '\\begin{matrix}' in line or '\\begin{bmatrix}' in line or '\\begin{smallmatrix}' in line or '\\begin{pmatrix}' in line or '\\begin{array}' in line:
                            inMatrix = True
                            fileOut.write(line)
                        elif '\\end{matrix}' in line or '\\end{bmatrix}' in line or '\\end{smallmatrix}' in line or '\\end{pmatrix}' in line or '\\end{array}' in line:
                            inMatrix = False
                            fileOut.write(line)
                        elif '\\begin{matrix}' not in line:
                            tempLine = line.replace('&amp;', '\\amp')
                            tempLine = tempLine.replace('\\\\', '</mrow>\n<mrow>')
                            fileOut.write(tempLine)
                    elif '\\begin{split}' in line:
                        inSplit = True
                        fileOut.write('<mrow>')
                        changeLines.append(line_num)
                    elif '\\begin{align}' in line:
                        inAlign = True
                        fileOut.write('<mrow>')
                        changeLines.append(line_num)
                    elif '\\begin{aligned}' in line:
                        inAlign = True
                        fileOut.write('<mrow>')
                        changeLines.append(line_num)
                    elif '\\begin{align*}' in line:
                        inAlign = True
                        fileOut.write('<mrow>')
                        changeLines.append(line_num)
                    elif '\\end{matrix}' in line or '\\end{bmatrix}' in line or '\\end{smallmatrix}' in line or '\\end{pmatrix}' in line or '\\end{array}' in line:
                        inMatrix = False
                        fileOut.write(line)
                    else:
                        fileOut.write(line)
            fileOut.close()

            print(changeLines)



    # print(dir)
    # print(fileList)