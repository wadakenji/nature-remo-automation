import * as fs from 'node:fs';

export const readJsonFile = (filename: string) => {
  const filePath = `${process.cwd()}/data/${filename}.json`
  const fileText = fs.readFileSync(filePath).toString()
  return JSON.parse(fileText)
}

export const writeJsonFile = (filename: string, data: unknown) => {
  const filePath = `${process.cwd()}/data/${filename}.json`
  const fileText = JSON.stringify(data)
  fs.writeFileSync(filePath, fileText)
}