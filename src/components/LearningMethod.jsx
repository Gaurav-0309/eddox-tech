export default function LearningMethod() {
  return (
    <>
      <section className="learning-method-section">
        <h2 className="section-title">
          Our Online Learning <span style={{ color: 'var(--accent-color)' }}>Method</span>
        </h2>
        <p className="section-subtitle">Discover a World of Learning Opportunities</p>

        <div className="method-cards">
          <div className="method-card">
            <div className="method-icon green"><i className="fas fa-clock" /></div>
            <h3 className="method-title">FLEXIBLE LEARNING</h3>
            <p className="method-description">Study any topic, anytime, and at your own pace. Our extensive catalog includes thousands of courses designed to fit your schedule and learning style.</p>
            <div className="method-divider" />
          </div>

          <div className="method-card">
            <div className="method-icon blue"><i className="fas fa-user-tie" /></div>
            <h3 className="method-title">PERSONALIZED EDUCATION</h3>
            <p className="method-description">Choose from various programs that cater to your specific needs and interests, ensuring a customized learning journey.</p>
            <div className="method-divider" />
          </div>

          <div className="method-card">
            <div className="method-icon yellow"><i className="fas fa-chalkboard-teacher" /></div>
            <h3 className="method-title">EXPERT INSTRUCTORS</h3>
            <p className="method-description">Learn from industry experts who bring real-world experience and insights to the virtual classroom.</p>
            <div className="method-divider" />
          </div>

          <div className="method-card">
            <div className="method-icon green"><i className="fas fa-comments" /></div>
            <h3 className="method-title">INTERACTIVE CONTENT</h3>
            <p className="method-description">Engage with dynamic, interactive course materials that make learning more effective and enjoyable.</p>
            <div className="method-divider" />
          </div>

          <div className="method-card">
            <div className="method-icon purple"><i className="fas fa-users" /></div>
            <h3 className="method-title">COMMUNITY SUPPORT</h3>
            <p className="method-description">Join a vibrant community of learners and instructors for peer support, collaboration, and networking opportunities.</p>
            <div className="method-divider" />
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title features-heading">Our Top Features for an Unmatched Experience</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-briefcase" /></div>
            <h3 className="feature-title">Swift Training</h3>
            <p className="feature-description">Personalised-Content based Technical Training</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-graduation-cap" /></div>
            <h3 className="feature-title">Future Ready Skills</h3>
            <p className="feature-description">Acquire Skills that can help you become future-ready</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-chart-line" /></div>
            <h3 className="feature-title">Exponential Growth</h3>
            <p className="feature-description">Boost your Career Growth with In-demand skills</p>
          </div>
        </div>
      </section>
    </>
  );
}
