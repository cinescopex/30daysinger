import React, { useEffect, useRef, useState } from "react";
import { Player } from "bitmovin-player/modules/bitmovinplayer-core";
import EngineBitmovinModule from "bitmovin-player/modules/bitmovinplayer-engine-bitmovin";
import MseRendererModule from "bitmovin-player/modules/bitmovinplayer-mserenderer";
import HlsModule from "bitmovin-player/modules/bitmovinplayer-hls";
import DashModule from "bitmovin-player/modules/bitmovinplayer-dash";
import AbrModule from "bitmovin-player/modules/bitmovinplayer-abr";
import XmlModule from "bitmovin-player/modules/bitmovinplayer-xml";
import ContainerTSModule from "bitmovin-player/modules/bitmovinplayer-container-ts";
import ContainerMp4Module from "bitmovin-player/modules/bitmovinplayer-container-mp4";
import SubtitlesModule from "bitmovin-player/modules/bitmovinplayer-subtitles";
import SubtitlesCEA608Module from "bitmovin-player/modules/bitmovinplayer-subtitles-cea608";
import PolyfillModule from "bitmovin-player/modules/bitmovinplayer-polyfill";
import StyleModule from "bitmovin-player/modules/bitmovinplayer-style";
import { UIFactory } from "bitmovin-player/bitmovinplayer-ui";
import "bitmovin-player/bitmovinplayer-ui.css";

function BitmovinPlayer({ content, onVideoSelected }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { videoUrl, videoTitle } = content[currentIndex];

  const [player, setPlayer] = useState(null);

  const playerConfig = {
    key: "d5af6a6a-bdc9-4a9b-8cb8-7a84cd52a4a7",
  };

  function handleSetCurrentIndex(index) {
    if (index >= content.length) index = 0;
    setCurrentIndex(index);
    window.scrollTo(0, 0);
  }

  const handleVideoSelected = (video) => {
    onVideoSelected(video);
  };

  const playerSource = {
    hls: videoUrl,
    title: videoTitle,
  };
  const playerDiv = useRef();

  useEffect(() => {
    function setupPlayer() {
      Player.addModule(EngineBitmovinModule);
      Player.addModule(MseRendererModule);
      Player.addModule(HlsModule);
      Player.addModule(XmlModule);
      Player.addModule(DashModule);
      Player.addModule(AbrModule);
      Player.addModule(ContainerTSModule);
      Player.addModule(ContainerMp4Module);
      Player.addModule(SubtitlesModule);
      Player.addModule(SubtitlesCEA608Module);
      Player.addModule(PolyfillModule);
      Player.addModule(StyleModule);

      const playerInstance = new Player(playerDiv.current, playerConfig);
      UIFactory.buildDefaultUI(playerInstance);
      playerInstance.load(playerSource).then(
        () => {
          setPlayer(playerInstance);
          console.log("Successfully loaded source");
        },
        () => {
          console.log("Error while loading source");
        }
      );
    }

    setupPlayer();

    return () => {
      function destroyPlayer() {
        if (player != null) {
          player.destroy();
          setPlayer(null);
        }
      }

      destroyPlayer();
    };
  }, []);

  useEffect(() => {
    if (playerSource !== null) player?.load(playerSource);
  }, [currentIndex]);

  return (
    <>
      <div id="player" ref={playerDiv} />
    </>
  );
}

export default BitmovinPlayer;
