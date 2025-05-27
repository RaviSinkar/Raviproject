# Create a temporary directory
$tempDir = "temp_project"
New-Item -ItemType Directory -Force -Path $tempDir

# Copy all files except those in .zipignore
Get-ChildItem -Path . -Exclude (Get-Content .zipignore) | Copy-Item -Destination $tempDir -Recurse -Force

# Create the zip file
Compress-Archive -Path "$tempDir\*" -DestinationPath "project.zip" -Force

# Clean up
Remove-Item -Path $tempDir -Recurse -Force
Remove-Item -Path .zipignore -Force
Remove-Item -Path $MyInvocation.MyCommand.Path -Force

Write-Host "Project has been zipped to project.zip" 