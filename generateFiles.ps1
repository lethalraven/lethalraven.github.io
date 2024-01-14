# To use .\generateFiles.ps1 -COMPONENT_NAME x -DESTINATION components or pages

param (
    [string]$COMPONENT_NAME,
    [string]$DESTINATION
)

if (-not $COMPONENT_NAME) {
    Write-Host "Please provide a component name."
    exit 1
}

if (-not $DESTINATION -or ($DESTINATION -ne "components" -and $DESTINATION -ne "pages")) {
    Write-Host "Please provide a valid destination (components or pages)."
    exit 1
}

$DIRECTORY = "src\$DESTINATION\$COMPONENT_NAME"

mkdir -p $DIRECTORY

# Create JS/JSX file
$JSContent = "import './$COMPONENT_NAME.css';`r`n"
$JSContent += "`r`n"
$JSContent += "const $COMPONENT_NAME = () => {`r`n"
$JSContent += "    return (`r`n"
$JSContent += "        <div className=`"$COMPONENT_NAME`">`r`n"
$JSContent += "        </div>`r`n"
$JSContent += "    );`r`n"
$JSContent += "};`r`n"
$JSContent += "`r`n"
$JSContent += "export default $COMPONENT_NAME;"

$JSPath = Join-Path $DIRECTORY "$COMPONENT_NAME.jsx"
$JSContent | Out-File -FilePath $JSPath -Encoding UTF8


# Create CSS file
$CSSContent = ".$COMPONENT_NAME {`r`n"
$CSSContent += "`r`n"
$CSSContent += "}"

$CSSPath = Join-Path $DIRECTORY "$COMPONENT_NAME.css"
$CSSContent | Out-File -FilePath $CSSPath -Encoding UTF8

Write-Host "Component '$COMPONENT_NAME' created in 'src\$DESTINATION\'."