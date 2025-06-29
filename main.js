 // Adicionar efeito de movimento suave aos ícones flutuantes
        document.addEventListener('mousemove', function(e) {
            const icons = document.querySelectorAll('.tech-icon');
            const moveX = (e.clientX - window.innerWidth / 2) / 50;
            const moveY = (e.clientY - window.innerHeight / 2) / 50;
            
            icons.forEach((icon, index) => {
                const factor = (index + 1) * 0.2;
                icon.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
            });
        });
        
        // Adicionar funcionalidade aos botões
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function() {
                // Efeito de clique
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
                
                // Aqui você adicionaria a navegação real para os cursos/canal
                const buttonText = this.querySelector('h3').textContent;
                console.log(`Clicou em: ${buttonText}`);
                
                // Exemplo de redirecionamento (descomente e substitua as URLs)
                /*
                if (buttonText.includes('UX/UI')) {
                    window.location.href = 'https://seusite.com/curso-uxui';
                } else if (buttonText.includes('InsiteWP')) {
                    window.location.href = 'https://seusite.com/insitewp';
                } else if (buttonText.includes('YouTube')) {
                    window.location.href = 'https://youtube.com/seucanalaqui';
                }
                */
            });
        });
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'95662903b1a24298',t:'MTc1MTA0MDA1Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
