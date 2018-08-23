import React from 'react';
import ProgressBar from './ProgressBar';

const getPointsUntilNextLevel = (levelsList, currentPoints) => {
  const numberOfPoints = levelsList.find(item => item.xpLimit > currentPoints).xpLimit;
  return (numberOfPoints - currentPoints)
};

const getNextLevel = (levelsList, currentLevel) => {
    const currentLevelIndex = levelsList.findIndex(item => item.level === currentLevel);
    const nextLevel = levelsList[currentLevelIndex + 1]
    if (!nextLevel) { 
      return '???'
    } else {
      return nextLevel.level
    }
};

const numberWithCommas = (points) => {
  return points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Status = ({ level, levelsList, points }) => {
  
  let currentLevelIndex = 0;
  const currentLevel = levelsList.find((levelItem, i) => {
    currentLevelIndex = i
    return levelItem.level === level;
  });
  console.log(currentLevel)
  
  const statusProgress = {
    min: currentLevel.level === 'Bronze' ? 0 : levelsList[currentLevelIndex - 1].xpLimit,
    current: points,
    max: currentLevel.xpLimit,
  };
  
  return(
    <div className='cardPadding'>
      <p className='totalPoints'>{ numberWithCommas(points) }</p>
        <div>
          <ProgressBar { ...statusProgress } />
          <div className='level'>
            <p className='currentLevel'>{ level }</p>
            <p className='pointsUntil'>{ getPointsUntilNextLevel(levelsList, points) } PTS until ⟶ </p>
            <p className='nextLevel'>{ getNextLevel(levelsList, level) }</p>
          </div>
        </div>
    </div>
  );
};

export default Status;