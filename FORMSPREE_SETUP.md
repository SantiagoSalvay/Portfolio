# 📧 Configuración de Formspree (MÁS FÁCIL)

## 🚀 Configuración Rápida (2 minutos)

### 1. Crear cuenta en Formspree
1. Ve a [formspree.io](https://formspree.io)
2. Crea una cuenta gratuita con tu email `js.salvay@gmail.com`
3. Verifica tu email

### 2. Crear tu formulario
1. En el dashboard, haz clic en **+ New Form**
2. Nombre: "Portfolio Contact Form"
3. Email: `js.salvay@gmail.com` (aquí recibirás los mensajes)
4. Copia tu **Form URL** (algo como `https://formspree.io/f/abc123`)

### 3. Actualizar el código
En `src/components/Contact.astro`, línea 5, reemplaza:

```astro
action="https://formspree.io/f/xvgokgrp"
```

Por tu URL personalizada:
```astro
action="https://formspree.io/f/TU_ID_AQUI"
```

## ✅ ¡Ya está!

Tu formulario ahora:
- ✅ Envía emails reales a tu Gmail
- ✅ Es gratuito (hasta 50 emails/mes)
- ✅ No requiere backend
- ✅ Funciona inmediatamente

## 🎯 Funcionalidades incluidas:

- **Anti-spam**: Formspree incluye protección automática
- **Notificaciones**: Recibes emails instantáneos
- **Dashboard**: Puedes ver todos los mensajes en formspree.io
- **Responsive**: Perfecto en móvil y desktop
- **Loading states**: Indicador visual mientras envía
- **Validación**: Campos requeridos y formatos

## 📱 Cómo se ve para el usuario:

1. Usuario llena el formulario
2. Hace clic en "Enviar mensaje"
3. Ve spinner de carga
4. Formspree envía el email
5. Usuario ve mensaje de confirmación
6. **TÚ recibes el email en Gmail con todos los datos**

Es la solución más simple y confiable!