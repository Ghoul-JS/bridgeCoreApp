"use client";

import { useEffect } from 'react';

// Declaración local de los tipos para Window
declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        load: (config: any) => void;
        destroy?: () => void;
      };
    };
  }
}

const VoiceflowChat = () => {
  useEffect(() => {
    const loadVoiceflow = () => {
      // Verificar que estamos en el cliente
      if (typeof window === 'undefined') return;
      
      const d = document;
      const t = 'script';
      const v = d.createElement(t);
      
      // Verificar que hay elementos script en el documento
      const scripts = d.getElementsByTagName(t);
      if (scripts.length === 0) return;
      
      const s = scripts[0];
      
      // Asegurar que s no es null antes de usar parentNode
      if (!s || !s.parentNode) return;
      
      v.onload = function() {
        // Asegurar que window.voiceflow existe antes de usarlo
        if (window.voiceflow && window.voiceflow.chat) {
          window.voiceflow.chat.load({
            verify: { projectID: '67bf92e28fda2ee3f5b3ec6a' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
              url: "https://runtime-api.voiceflow.com"
            }
          });
        }
      };
      
      v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      v.type = "text/javascript";
      s.parentNode.insertBefore(v, s);
    };
    
    loadVoiceflow();
    
    // Limpieza (opcional)
    return () => {
      // Verificar que estamos en el cliente y que window.voiceflow existe
      if (typeof window !== 'undefined' && 
          window.voiceflow && 
          window.voiceflow.chat && 
          typeof window.voiceflow.chat.destroy === 'function') {
        window.voiceflow.chat.destroy();
      }
    };
  }, []);
  
  return null; // Este componente no renderiza nada visualmente
};

export default VoiceflowChat;