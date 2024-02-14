import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import annyang from 'annyang';

function VoiceNavigator() {
   
    const navigate = useNavigate();
    useEffect(() => {
        if (annyang) {
            const commands = {
                "home" : () => navigate('/'),
                "profile" : () => navigate('/profile')
            };

            annyang.addCommands(commands);
            annyang.start();

            return () => {
                annyang.abort();
            };
        } else {
            console.error("Speech Recognition is not supported");
        }
    }, []);

    return (
        <div>
            <p>Say "navigate home" to go to the home page.</p>
        </div>
    );
}

export default VoiceNavigator;
