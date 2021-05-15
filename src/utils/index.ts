import { readdirSync, statSync } from 'fs'

export function readRecursively(dirPath: string, fileList: string[] = []) {
  const files = readdirSync(dirPath)
  for (const file of files) {
    const filePath = dirPath + '/' + file
    const stat = statSync(filePath)

    if (stat.isFile()) fileList.push(filePath)
    else fileList = readRecursively(filePath, fileList)
  }

  return fileList
}
