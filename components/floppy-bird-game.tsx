"use client";

import { Unity, useUnityContext } from "react-unity-webgl";

export default function FloppyBirdGame() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl:     "/floppybird/Build/floppybird.loader.js",
    dataUrl:       "/floppybird/Build/floppybird.data",
    frameworkUrl:  "/floppybird/Build/floppybird.framework.js",
    codeUrl:       "/floppybird/Build/floppybird.wasm",
  });

  return (
    <div className="flex flex-col items-center">
      {!isLoaded && (
        <p className="text-sm text-gray-400 mb-2">
          Loading... {Math.round(loadingProgression * 100)}%
        </p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ width: 540, height: 960 }}
      />
    </div>
  );
}