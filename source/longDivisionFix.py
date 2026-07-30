import os
import subprocess
import time
import sys

from pathlib import Path

inputStr = ""

import pyperclip as pc

inputStr = pc.paste()


## Process the input string

inputStr = inputStr.replace('\\begin{array}', '')
inputStr = inputStr.replace('\\end{array}', '')
inputStr = inputStr.replace('\r', '')
inputStr = inputStr.replace('\n', '')
inputStr = inputStr.replace('\t', '')
inputStr = inputStr.replace(' ', '')
inputStr = inputStr.replace('\\,', '')

#tempStr = "{cccccc}&amp;&amp;&amp;&amp;3&amp;2\\\\\\hhline{~~|----}7&amp;9\\vline&amp;2&amp;5&amp;8&amp;5\\\\&amp;-&amp;2&amp;3&amp;7&amp;\\downarrow\\\\\\hhline{~~---~}&amp;&amp;&amp;2&amp;1&amp;5\\\\&amp;&amp;-&amp;1&amp;5&amp;8\\\\\\hhline{~~~---}&amp;&amp;&amp;&amp;5&amp;7\\\\"

#print(tempStr)

tempStr = inputStr

with open('LongDivisionOutput.txt', 'w') as fileOut:
    fileOut.write('<tabular>\n')

    # Columns with alignment

    firstOpen = tempStr.index('{')
    firstClose = tempStr.index('}')
    if firstOpen < 3:
        colList = tempStr[firstOpen+1:firstClose]
        for let in colList:
            if let == 'c':
                fileOut.write('\t<col halign="center"/>\n')
            elif let == 'r':
                fileOut.write('\t<col halign="right"/>\n')
            elif let =='l':
                fileOut.write('\t<col halign="left"/>\n')
            else:   
                fileOut.write('\t<col/>\n')

    tempStr = tempStr[firstClose+1:]

    if not tempStr[-1] == "\\":
        tempStr += "\\\\"
    #print(tempStr)

    while tempStr.find('\\\\') > -1:
        rowData = tempStr[:tempStr.find('\\\\')]
        borderData = None
        if tempStr.find('\\hhline{') > -1 and tempStr.find('\\hhline{') < tempStr.find('\\\\') + 3:
            borderData = tempStr[tempStr.find('{', tempStr.find('\\hhline{'))+1:tempStr.find('}', tempStr.find('\\hhline{'))].replace("|", "")
            tempStr = tempStr[tempStr.find('}', tempStr.find('\\hhline{'))+1:]
        else:
            tempStr = tempStr[tempStr.find('\\\\')+2:]

        curInd = 0
        curCell = 0
        fileOut.write('\t<row>\n\t\t')
        while curInd <= len(rowData):
            endofCell = rowData.find('&amp;', curInd)
            if endofCell > -1:
                cellData = rowData[curInd:endofCell]
            else:
                cellData = rowData[curInd:]
            cellFormatStr = ''
            if "\\vline" in cellData:
                cellFormatStr += ' right="medium"'
                cellData = cellData.replace("\\vline", "")
            if borderData and curCell > len(borderData):
                print("Error. Missing cell classification")
            elif not borderData or borderData[curCell] == "~":
                pass
            elif borderData[curCell] == "-":
                cellFormatStr += ' bottom="medium"'
            else:
                print("Error. Missing cell classification")

            fileOut.write('<cell'+cellFormatStr + '>')

            if len(cellData) > 0:
                fileOut.write(f'<m>{cellData}</m>')
            fileOut.write('</cell>')

            curCell += 1
            if endofCell > -1:
                curInd = endofCell + 5
            else:
                curInd = len(rowData)+1


        fileOut.write('\n\t</row>\n')
    fileOut.write('</tabular>')
                

with open('LongDivisionOutput.txt', 'r') as file:
    strOutput = file.read()

pc.copy(strOutput)

