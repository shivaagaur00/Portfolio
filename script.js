document.addEventListener("DOMContentLoaded", function() {
    const bgAnimation = document.getElementById('bgAnimation');
    const number = 600;

    for (let index = 0; index < number; index++) {
        const colorbox = document.createElement('div');
        colorbox.classList.add('colorBox');
        bgAnimation.append(colorbox);
    }

    document.querySelector('.toggle').addEventListener('click', function() {
        console.log("hello");
        const fullDiv = document.querySelector('.full');
        fullDiv.classList.toggle('pointer_events');
    });

    const colorPalettes = {
        palette1: {
            bgColor: '#121212',
            secondBg: '#1c1c1c',
            textColor: '#e0e0e0',
            mainColor: '#ff4081',
            hoverColor: '#ff79b0',
            white: '#ffffff'
        },
        palette2: {
            bgColor: '#0d0d0d',
            secondBg: '#2b2b2b',
            textColor: '#fafafa',
            mainColor: '#00e676',
            hoverColor: '#69f0ae',
            white: '#ffffff'
        },
        palette3: {
            bgColor: '#1f1f1f',
            secondBg: '#333333',
            textColor: '#cfd8dc',
            mainColor: '#3f51b5',
            hoverColor: '#7986cb',
            white: '#ffffff'
        },
        palette4: {
            bgColor: '#263238',
            secondBg: '#37474f',
            textColor: '#eceff1',
            mainColor: '#ffeb3b',
            hoverColor: '#fff59d',
            white: '#ffffff'
        },
        palette5: {
            bgColor: '#303f9f',
            secondBg: '#3949ab',
            textColor: '#ffffff',
            mainColor: '#f44336',
            hoverColor: '#e57373',
            white: '#ffffff'
        },
        palette6: {
            bgColor: '#121212',
            secondBg: '#1c1c1c',
            textColor: '#ffffff',
            mainColor: '#00ffee',
            hoverColor: '#02d4ba',
            white: '#ffffff'
        }
    };

    const palettes = Object.values(colorPalettes);
    let currentIndex = 0;

    document.querySelector('.pallete').addEventListener('click', function() {
        const currentPalette = palettes[currentIndex];
        document.documentElement.style.setProperty('--bg-color', currentPalette.bgColor);
        document.documentElement.style.setProperty('--second-bg', currentPalette.secondBg);
        document.documentElement.style.setProperty('--text-color', currentPalette.textColor);
        document.documentElement.style.setProperty('--main-color', currentPalette.mainColor);
        document.documentElement.style.setProperty('--hover-color', currentPalette.hoverColor);
        document.documentElement.style.setProperty('--white', currentPalette.white);
        currentIndex = (currentIndex + 1) % palettes.length; 
    });
    document.querySelector('.resume').addEventListener('click',()=>{
        const temp=document.createElement("a");
        temp.href="shivagaur_resume.pdf";
        temp.download="shivagaur_resume.pdf";
        temp.click();   
    });
});
