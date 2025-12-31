export default function JobSupport() {
  return (
    <section className="job-support-section">
      <div className="job-support-content">
        <div className="job-support-text">
          <h2 className="job-support-title">100% Job Support end-to-end</h2>
          <p className="job-support-subtitle">Discover a world of learning opportunities through our upcoming courses</p>

          <div className="job-support-cards">
            <div className="job-card">
              <div className="job-icon"><i className="fas fa-users" /></div>
              <div className="job-title">Comprehensive Training</div>
            </div>

            <div className="job-card">
              <div className="job-icon"><i className="fas fa-file-alt" /></div>
              <div className="job-title">Resume Building</div>
            </div>

            <div className="job-card">
              <div className="job-icon"><i className="fas fa-microphone" /></div>
              <div className="job-title">Interview Preparation</div>
            </div>

            <div className="job-card">
              <div className="job-icon"><i className="fas fa-handshake" /></div>
              <div className="job-title">Job Placement Assistance</div>
            </div>
          </div>
        </div>

        <div className="job-support-images">
          <div className="image-wrapper">
            <img src="/images/student.png" alt="Job Support Images" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
