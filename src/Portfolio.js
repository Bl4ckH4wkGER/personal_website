import * as React from 'react';
import './Portfolio.css';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Portfolio() {
  return (
    <Container id="portfolio">
      <Box>
        <h2>Portfolio</h2>
        <h3>Web projects</h3>
        <ul>
          <li>
            Souvenir sorting (
            <a
              className="portfolioLink"
              href="https://forums.geocaching.com/GC/index.php?/topic/361703-release-notes-website-and-geocaching%C2%AE-app-souvenir-sorting-april-26-2021/"
              target={'_blank'}
              rel="noreferrer">
              release notes
            </a>
            )
          </li>
          <li>
            Search to map (
            <a
              className="portfolioLink"
              href="https://forums.geocaching.com/GC/index.php?/topic/362946-release-notes-website-search-to-map-june-17-2021/"
              target={'_blank'}
              rel="noreferrer">
              release notes
            </a>
            )
          </li>
          <li>
            Virtual Rewards 3.0 (
            <a
              className="portfolioLink"
              href="https://www.geocaching.com/blog/2022/02/virtual-rewards-en/"
              target={'_blank'}
              rel="noreferrer">
              release notes
            </a>
            ,&nbsp;
            <a
              className="portfolioLink"
              href="https://www.geocaching.com/play/request/virtuals2022"
              target={'_blank'}
              rel="noreferrer">
              landing page
            </a>
            )
          </li>
          <li>
            Search results (
            <a
              className="portfolioLink"
              href="https://forums.geocaching.com/GC/index.php?/topic/370226-release-notes-website-enhanced-search-results/"
              target={'_blank'}
              rel="noreferrer">
              release notes
            </a>
            )
          </li>
        </ul>
        <h3>Platform projects</h3>
        <ul>
          <li>
            Event calendar retirement (
            <a
              className="portfolioLink"
              href="https://forums.geocaching.com/GC/index.php?/topic/363810-release-notes-website-upcoming-retirement-of-the-event-calendar-july-12-2021/"
              target={'_blank'}
              rel="noreferrer">
              release notes
            </a>
            )
          </li>
          <li>
            Old drafts retirement (
            <a
              className="portfolioLink"
              href="https://forums.geocaching.com/GC/index.php?/topic/370029-release-notes-website-upcoming-retirement-of-the-old-drafts-pages-february-1-2022/"
              target={'_blank'}
              rel="noreferrer">
              release notes
            </a>
            )
          </li>
          <li>
            Account deletion request submission (
            <a
              className="portfolioLink"
              href="https://forums.geocaching.com/GC/index.php?/topic/378828-release-notes-website-geocaching%C2%AE-app-adventure-lab%C2%AE-account-deletion-request-submission-may-31-2022/"
              target={'_blank'}
              rel="noreferrer">
              release notes
            </a>
            )
          </li>
          <li>
            Pocket Querie API (
            <a
              className="portfolioLink"
              href="https://forums.geocaching.com/GC/index.php?/topic/382502-release-notes-website-pocket-query-api-october-18-2022/"
              target={'_blank'}
              rel="noreferrer">
              release notes
            </a>
            )
          </li>
          <li>
            Benchmarking retirement (
            <a
              className="portfolioLink"
              href="https://forums.geocaching.com/GC/index.php?/topic/382460-release-notes-website-benchmarking-retirement-october-17-2022/"
              target={'_blank'}
              rel="noreferrer">
              release notes
            </a>
            )
          </li>
        </ul>
        <h3>Marketing campaigns</h3>
        <ul>
          <li>
            Reach the Peak (
            <a
              className="portfolioLink"
              href="https://www.geocaching.com/blog/2021/07/new-leaderboard-challenge-reach-the-peak/"
              target={'_blank'}
              rel="noreferrer">
              release notes
            </a>
            )
          </li>
          <li>
            Signal’s Labyrinth (
            <a
              className="portfolioLink"
              href="https://www.geocaching.com/blog/2022/03/introducing-signals-labyrinth/"
              target={'_blank'}
              rel="noreferrer">
              release notes
            </a>
            )
          </li>
        </ul>
        <h3>Business development campaigns</h3>
        <ul>
          <li>
            Texas Instruments #SpreadMathLove (
            <a
              className="portfolioLink"
              href="https://www.geocaching.com/blog/2021/06/spreadmathlove-with-exclusive-trackables-from-texas-instruments/"
              target={'_blank'}
              rel="noreferrer">
              release notes
            </a>
            ,&nbsp;
            <a
              className="portfolioLink"
              href="https://www.geocaching.com/play/promotions/timathlove"
              target={'_blank'}
              rel="noreferrer">
              landing page
            </a>
            )
          </li>
          <li>
            World of Warcraft: Wrath of the Lich King – A Pandemic System Board Game (
            <a
              className="portfolioLink"
              href="https://www.geocaching.com/blog/2021/09/find-world-of-warcraft-trackables-and-save-azeroth/"
              target={'_blank'}
              rel="noreferrer">
              release notes
            </a>
            ,&nbsp;
            <a
              className="portfolioLink"
              href="https://www.geocaching.com/play/promotions/wowboardgame"
              target={'_blank'}
              rel="noreferrer">
              landing page
            </a>
            )
          </li>
          <li>
            Kamp Koral: SpongeBob’s Under Years (
            <a
              className="portfolioLink"
              href="https://www.geocaching.com/blog/2022/01/get-ready-for-kamp-koral-badge-trackables/"
              target={'_blank'}
              rel="noreferrer">
              release notes
            </a>
            ,&nbsp;
            <a
              className="portfolioLink"
              href="https://www.geocaching.com/play/promotions/kampkoral"
              target={'_blank'}
              rel="noreferrer">
              landing page
            </a>
            )
          </li>
        </ul>
      </Box>
    </Container>
  );
}
export default Portfolio;
