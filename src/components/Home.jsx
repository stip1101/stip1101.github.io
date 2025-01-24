import ParticlesBackground from './ParticlesBackground';

const Home = () => {
  return (
    <div className="home-container">
      <ParticlesBackground />
      <div className="content">
        <div className="left-section">
          <h1>Empowering the Future of Web3 with Trend Token</h1>
          <p>Revolutionize the world of cryptocurrency with Trend - your ultimate tech solution in the Web3 industry. Our cutting-edge AI-powered platform is your all-in-one hub for creating website</p>
          <div className="buttons">
            <button className="primary-button">Start Your Web3 Journey</button>
            <button className="social-button">X</button>
            <button className="social-button">Telegram</button>
          </div>
        </div>
        <div className="right-section">
          <div className="trend-card">
            {/* Здесь будет ваша карточка с графиком */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 