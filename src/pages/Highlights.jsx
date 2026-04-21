import { useState } from 'react'

function Highlights() {
  const [activeTab, setActiveTab] = useState('videos')
  
  const videos = [
    { id: 1, title: 'Main Event Finish', duration: '3:45', thumbnail: '🎬' },
    { id: 2, title: 'Best Spots Compilation', duration: '5:20', thumbnail: '💥' },
    { id: 3, title: 'Entrances & Pyro', duration: '4:10', thumbnail: '🎆' },
    { id: 4, title: 'Post-Match Celebrations', duration: '2:55', thumbnail: '🎉' }
  ]

  const photos = [
    { id: 1, caption: 'Crowd at Allegiant Stadium', image: '🏟️' },
    { id: 2, caption: 'Championship Moment', image: '🏆' },
    { id: 3, caption: 'Epic Entrance', image: '✨' },
    { id: 4, caption: 'Victory Celebration', image: '🎊' },
    { id: 5, caption: 'Fan Reactions', image: '👏' },
    { id: 6, caption: 'Behind the Scenes', image: '📸' }
  ]

  return (
    <div className="highlights-page">
      <header className="page-header">
        <h1>🎬 WrestleMania 42 Highlights</h1>
        <p>Relive the greatest moments from Las Vegas</p>
      </header>

      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          🎥 Videos
        </button>
        <button 
          className={`tab-btn ${activeTab === 'photos' ? 'active' : ''}`}
          onClick={() => setActiveTab('photos')}
        >
          📷 Photos
        </button>
      </div>

      {activeTab === 'videos' && (
        <div className="media-grid">
          {videos.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">{video.thumbnail}</div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <span className="video-duration">{video.duration}</span>
                <button className="btn-play">▶ Play</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'photos' && (
        <div className="photo-grid">
          {photos.map(photo => (
            <div key={photo.id} className="photo-card">
              <div className="photo-image">{photo.image}</div>
              <p className="photo-caption">{photo.caption}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Highlights