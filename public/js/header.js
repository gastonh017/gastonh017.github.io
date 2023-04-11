window.addEventListener('load', () => {
  const menuOpen = document.getElementById('menuOpen');
  const menuClose = document.getElementById('menuClose');
  const nav = document.getElementsByTagName('nav');
  const logo = document.getElementById('logo');
  const quienesSomos = document.getElementById('quienesSomos');
  const menu = document.getElementById('menu');
  const promociones = document.getElementById('promociones');
  const ubicacion = document.getElementById('ubicacion');
  const contactenos = document.getElementById('contactenos');
  let cabecera = document.getElementsByTagName('header');
        
          
  //------ Si no está en el inicio, la cabecera no es transparente
  if (window.location.pathname !== '/') cabecera[0].classList.add('bkg-clr');
          
  //------ Lógica de mostrar el menu en modo mobile.
  //- Abrir el menú
  menuOpen.addEventListener('click', () => {
    menuOpen.style.display = 'none';
    menuClose.style.display = 'inline-block';
    nav[0].classList.add('active');
  })
  //- Cerrar el menú
  menuClose.addEventListener('click', () => {
    menuClose.style.display = 'none';
    menuOpen.style.display = 'inline-block';
    nav[0].classList.remove('active');
  })
  //- Sacar iconos cuando el ancho es >= 768px
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768){
      menuOpen.style.display = 'none';
      menuClose.style.display = 'none';
      nav[0].classList.remove('active');
    } else {
      menuOpen.style.display = 'inline-block';
    }
  });
  
  //------ Lógica para pasar de fondo transparente a fondo con color del header en el index.
  window.addEventListener('scroll', () => {
    if (window.location.pathname === '/'){
      if(window.scrollY > window.innerHeight - 100) {
          cabecera[0].classList.add('bkg-clr')
      } else {
          cabecera[0].classList.remove('bkg-clr');
      }
    }else{
      cabecera[0].classList.add('bkg-clr')
    }
  });

  logo.addEventListener('click', () => desactivar());

  quienesSomos.addEventListener('click', () => {
    desactivar();
    quienesSomos.classList.add('navActive');
  });

  menu.addEventListener('click', () => {
    desactivar();
    productos.classList.add('navActive');
  })
  promociones.addEventListener('click', () => {
    desactivar();
    promociones.classList.add('navActive');
  })
  ubicacion.addEventListener('click', () => {
    desactivar();
    ubicacion.classList.add('navActive');
  })
  contactenos.addEventListener('click', () => {
    desactivar();
    contactenos.classList.add('navActive');
  })
  
  const desactivar = () => {
    quienesSomos.classList.remove('navActive');
    menu.classList.remove('navActive');
    promociones.classList.remove('navActive');
    ubicacion.classList.remove('navActive');
    contactenos.classList.remove('navActive');
  }

desactivar();
})



