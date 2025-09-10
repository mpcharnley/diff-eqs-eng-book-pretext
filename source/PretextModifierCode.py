import os
import subprocess
import time
import sys

dir_path = os.path.dirname(os.path.realpath(__file__))

os.chdir(dir_path)

fileList = [f for f in os.listdir(path=dir_path) if (f.endswith('.ptx') and 'old' not in f)]

for fileName in fileList:
    #fileName = 'sec-separable.ptx'
    outputName = 'testRevision.ptx'

    inExercises = False
    inExercise = False
    inExample = False
    inExStatement = False
    inExSoln = False
    inEquation = False
    isEqnNum = False

    strEquation = ''
    eqnLabel = ''

    fileOut = open(outputName, 'w')

    with open(fileName, 'r') as fileIn:
        for line in fileIn:
            writeLine = True
            line = line.replace('’', '\'')
            if 'xml:id=\"' in line:
                curInd = 0
                curInd = line.find('xml:id=\"', curInd)
                while curInd >= 0:
                    strTag = line[curInd + 8: line.find('\"', curInd + 9)]
                    line=line.replace(strTag, strTag.replace(':','-'))
                    curInd = line.find('xml:id=\"', curInd+1)
            if '<xref ref=\"' in line:
                curInd = 0
                curInd = line.find('<xref ref=\"', curInd)
                while curInd >= 0:
                    strTag = line[curInd + 11: line.find('\"', curInd + 12)]
                    line=line.replace(strTag, strTag.replace(':','-'))
                    curInd = line.find('<xref ref=\"', curInd+1)


            if '<pretext>' in line or '<article>' in line or '</pretext>' in line or '</article>' in line:
                writeLine = False
                continue
            elif '<subsection xml:id="exercises">' in line:
                fileOut.write('<exercises>\n')
                inExercises = True
                writeLine = False
            elif inExercises and '</subsection>' in line:
                if inExercise:
                    fileOut.write('</exercise>')
                    inExercise = False
                fileOut.write('</exercises>\n')
                inExercises = False
                writeLine = False
            elif '</section>' in line:
                writeLine = False
                if inExercise:
                    fileOut.write('</exercise>')
                    inExercise = False
                if inExercises:
                    fileOut.write('</exercises>')
                    inExercises = False
                if inExample:
                    fileOut.write('</example>')
                    inExample = False
                fileOut.write(line)
            else:
                if inExercise and not inExStatement and not inExSoln:
                    if '<' in line and '<p>' not in line:
                        fileOut.write('</exercise>\n')
                        inExercise = False
                    elif '<p>' in line:
                        fileOut.write('<answer>')
                        inExSoln = True
                if inExSoln:
                    if '</p>' in line:
                        fileOut.write(line)
                        fileOut.write('</answer>\n</exercise>\n')
                        inExSoln = False
                        inExercise = False
                        writeLine = False

    ####### Pick up here tomorrow
                if inEquation:
                    writeLine = False
                    if '\\label{' in line:
                        eqnLabel = line[line.find('\\label{') + 7:line.find('}', line.find('\\label{') + 6)]
                        line = line.replace('\\label{'+eqnLabel+'}', '')
                        line = line.replace('\n', '')
                        eqnLabel = eqnLabel.replace(':', '-')
                    if '{equation' not in line:
                        strEquation += line
                    else:
                        if '\\end{equation*}</me>' in line:
                            strEquation += line[:line.find('\\end{equation*}</me>')]
                            fileOut.write('<me>' + strEquation + '</me>\n')
                            line = line[line.find('\\end{equation*}</me>')+len('\\end{equation*}</me>'):]
                            writeLine = True
                            inEquation = False
                        else:
                            strEquation += line[:line.find('\\end{equation}</me>')]
                            if len(eqnLabel) > 1:
                                fileOut.write('<men xml:id=\"' + eqnLabel + '\">' + strEquation + '</men>\n')
                            else:
                                fileOut.write('<men>' + strEquation + '</men>\n')
                            line = line[line.find('\\end{equation}</me>')+len('\\end{equation*}</me>'):]
                            writeLine = True
                            inEquation = False
                if '<me>\\begin{equation}' in line:
                    writeLine = False
                    fileOut.write(line.replace('<me>\\begin{equation}', ''))
                    inEquation = True
                    strEquation = line[line.find('<me>\\begin{equation}') + len('<me>\\begin{equation}'):]
                    eqnLabel = ''
                if '<me>\\begin{equation*}' in line:
                    writeLine = False
                    fileOut.write(line.replace('<me>\\begin{equation*}', ''))
                    inEquation = True
                    strEquation = line[line.find('<me>\\begin{equation*}') + len('<me>\\begin{equation*}'):]
                    eqnLabel = ''

                if '<!-- div attr= class="exercise"-->' in line: # Start of exercise
                    if inExercise:
                        fileOut.write('</exercise>')
                        inExercise = False
                    if inExample:
                        fileOut.write('</example>')
                        inExample = False
                    fileOut.write('<exercise>\n<statement>')
                    fileOut.write(line.replace('<!-- div attr= class="exercise"-->', ''))
                    writeLine = False
                    inExercise = True
                    inExStatement = True
                if '<!--</div attr= class="exercise">-->' in line: # end of exercise statement
                    fileOut.write(line.replace('<!--</div attr= class="exercise">-->', ''))
                    writeLine = False
                    fileOut.write('</statement>\n')
                    inExStatement = False
                if '<!-- div attr= class="example"-->' in line:
                    fileOut.write(line.replace('<!-- div attr= class="example"-->', ''))
                    writeLine = False
                    fileOut.write('<example>\n<title> </title>\n<statement>')
                    inExample = True
                if '<!--</div attr= class="example">-->' in line:
                    fileOut.write(line.replace('<!--</div attr= class="example">-->', ''))
                    writeLine = False
                    fileOut.write('</statement>')
                if '<!-- div attr= class="exampleSol"-->' in line:
                    fileOut.write(line.replace('<!-- div attr= class="exampleSol"-->', ''))
                    writeLine = False
                    fileOut.write('<solution>')
                if '<!--</div attr= class="exampleSol">-->' in line:
                    fileOut.write(line.replace('<!--</div attr= class="exampleSol">-->', ''))
                    writeLine = False
                    fileOut.write('</solution>\n</example>')
                    inExample = False
            if writeLine:
                fileOut.write(line)

    fileOut.close()

    os.rename(fileName, fileName[:-4] + '_old.ptx')
    os.rename(outputName, fileName)