# To use .\genFiles.ps1 -NAME x -DESTINATION components or pages

param (
    [string]$NAME,
    [string]$DESTINATION
)

if (-not $NAME) {
    Write-Host "Please provide a component name."
    exit 1
}

if (-not $DESTINATION -or ($DESTINATION -ne "components" -and $DESTINATION -ne "pages" -and $DESTINATION -ne "utils")) {
    Write-Host "Please provide a valid destination (components or pages)."
    exit 1
}

$DIRECTORY = "src\$DESTINATION\$NAME"

mkdir -p $DIRECTORY

$TSXContent = "interface ${NAME}Props {};`r`n"
$TSXContent += "`r`n"
$TSXContent += "const ${NAME}: React.FC<${NAME}Props> = () => {`r`n"
$TSXContent += "  return (`r`n"
$TSXContent += "    <div className=`"$NAME`">`r`n"
$TSXContent += "    </div>`r`n"
$TSXContent += "  );`r`n"
$TSXContent += "};`r`n"
$TSXContent += "`r`n"
$TSXContent += "export default $NAME;"

$TSXPath = Join-Path $DIRECTORY "$NAME.tsx"
$TSXContent | Out-File -FilePath $TSXPath -Encoding UTF8 -NoNewline

$TSContent = "export { default as ${NAME} } from `"./${NAME}`";"

$TSPath = Join-Path $DIRECTORY "index.ts"
$TSContent | Out-File -FilePath $TSPath -Encoding UTF8 -NoNewline