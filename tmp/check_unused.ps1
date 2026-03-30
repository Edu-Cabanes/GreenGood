$components = @("Footer", "Navbar", "About", "BeforeAfterCarousel", "BlogPreview", "Contact", "FAQ", "Services", "Stats", "Testimonials", "WhatsAppButton")
$images = @("antes-jardin-cesped-artificial.jpg", "antes-jardineria-general.png", "Carretilla.jpg", "cesped-artificial.png", "despues-jardin-cesped-artificial.jpg", "despues-jardineria-general.png", "Instalador Especializado Césped Artificial.png", "Jardieria general.png", "jardineria.png.webp", "Limpiar piscina.png", "logo.png", "Mantenimiento de piscina.png", "og-image.png", "plantar.jpg", "quienes-somos.png", "rollo de césped artificial.png", "Servicios Integrados para Comunidades.png", "Servicios para Comunidades y Grandes Áreas.png")

$codeFiles = Get-ChildItem -Path app, components -Recurse -File -Include *.tsx,*.ts,*.js,*.jsx

Write-Host "--- Component Usage ---"
foreach ($comp in $components) {
    $count = (Get-Content -Path $codeFiles.FullName | Select-String -Pattern $comp -SimpleMatch).Count
    Write-Host "$comp: $count"
}

Write-Host "`n--- Image Usage ---"
foreach ($img in $images) {
    $count = (Get-Content -Path $codeFiles.FullName | Select-String -Pattern $img -SimpleMatch).Count
    Write-Host "$img: $count"
}
