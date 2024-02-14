/// <reference types="react" />
import { Controls } from "../types/types.ts";
interface VoiceVisualizerProps {
    controls: Controls;
    height?: string | number;
    width?: string | number;
    speed?: number;
    backgroundColor?: string;
    mainBarColor?: string;
    secondaryBarColor?: string;
    barWidth?: number;
    gap?: number;
    rounded?: number;
    fullscreen?: boolean;
    isControlPanelShown?: boolean;
    isDownloadAudioButtonShown?: boolean;
    animateCurrentPick?: boolean;
    onlyRecording?: boolean;
    isDefaultUIShown?: boolean;
    defaultMicrophoneIconColor?: string;
    defaultAudioWaveIconColor?: string;
    mainContainerClassName?: string;
    canvasContainerClassName?: string;
    isProgressIndicatorShown?: boolean;
    progressIndicatorClassName?: string;
    isProgressIndicatorTimeShown?: boolean;
    progressIndicatorTimeClassName?: string;
    isProgressIndicatorOnHoverShown?: boolean;
    progressIndicatorOnHoverClassName?: string;
    isProgressIndicatorTimeOnHoverShown?: boolean;
    progressIndicatorTimeOnHoverClassName?: string;
    isAudioProcessingTextShown?: boolean;
    audioProcessingTextClassName?: string;
    controlButtonsClassName?: string;
}
type Ref = HTMLAudioElement | null;
declare const VoiceVisualizer: import("react").ForwardRefExoticComponent<VoiceVisualizerProps & import("react").RefAttributes<Ref>>;
export default VoiceVisualizer;
