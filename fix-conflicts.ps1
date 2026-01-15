$files = @(
    "C:\Users\PC\Downloads\Portfolio-main\app\case-studies\aquaculture-monitoring-case-study\page.tsx",
    "C:\Users\PC\Downloads\Portfolio-main\app\case-studies\bird-detection-system-case-study\page.tsx",
    "C:\Users\PC\Downloads\Portfolio-main\app\case-studies\click2permit-case-study\page.tsx",
    "C:\Users\PC\Downloads\Portfolio-main\app\case-studies\fuel-request-system-case-study\page.tsx",
    "C:\Users\PC\Downloads\Portfolio-main\app\case-studies\portfolio-development-case-study\page.tsx",
    "C:\Users\PC\Downloads\Portfolio-main\app\case-studies\robocar-surveillance-case-study\page.tsx",
    "C:\Users\PC\Downloads\Portfolio-main\app\components\ui\aboutweb.tsx",
    "C:\Users\PC\Downloads\Portfolio-main\app\components\ui\contactweb.tsx",
    "C:\Users\PC\Downloads\Portfolio-main\app\components\ui\homeweb.tsx",
    "C:\Users\PC\Downloads\Portfolio-main\app\components\ui\SlideUpFooter.tsx",
    "C:\Users\PC\Downloads\Portfolio-main\app\components\LayoutContent.tsx",
    "C:\Users\PC\Downloads\Portfolio-main\app\components\loadingscreen.tsx"
)

foreach ($file in $files) {
    $content = Get-Content $file -Raw
    $inConflict = $false
    $keepSection = $true
    $lines = $content -split "`r?`n"
    $result = @()
    
    foreach ($line in $lines) {
        if ($line -match '^<{7}\s+HEAD\s*$') {
            $inConflict = $true
            $keepSection = $true
            continue
        }
        elseif ($line -match '^={7}\s*$') {
            $keepSection = $false
            continue
        }
        elseif ($line -match '^>{7}\s+[0-9a-f]{40}\s*$') {
            $inConflict = $false
            $keepSection = $true
            continue
        }
        
        if (!$inConflict -or $keepSection) {
            $result += $line
        }
    }
    
    $result -join "`r`n" | Set-Content $file -NoNewline
    Write-Host "Fixed: $file"
}

Write-Host "All merge conflicts resolved!"
