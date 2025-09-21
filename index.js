<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CareerCartographer.AI - Your Personal Career GPS</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root {
            --primary: #4361ee;
            --secondary: #3a0ca3;
            --accent: #4cc9f0;
            --light: #f8f9fa;
            --dark: #212529;
            --success: #4bb543;
            --warning: #ffcc00;
            --danger: #dc3545;
            --gray: #6c757d;
            --light-gray: #e9ecef;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        
        body {
            background-color: #f5f7fb;
            color: var(--dark);
            line-height: 1.6;
        }
        
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 1rem 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            display: flex;
            align-items: center;
        }
        
        .logo-icon {
            margin-right: 10px;
            font-size: 2rem;
        }
        
        nav ul {
            display: flex;
            list-style: none;
        }
        
        nav ul li {
            margin-left: 1.5rem;
        }
        
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.3s;
        }
        
        nav ul li a:hover {
            opacity: 0.8;
        }
        
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s;
            text-decoration: none;
        }
        
        .btn:hover {
            background-color: var(--secondary);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .btn-outline {
            background-color: transparent;
            border: 2px solid white;
        }
        
        .btn-outline:hover {
            background-color: white;
            color: var(--primary);
        }
        
        .hero {
            padding: 4rem 0;
            text-align: center;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 400"><rect fill="%234361ee" width="800" height="400"/><path fill="%233a0ca3" fill-opacity="0.2" d="M0 192L26.7 202.7C53.3 213 107 235 160 234.7C213.3 235 267 213 320 197.3C373.3 181 427 171 480 186.7C533.3 203 587 245 640 250.7C693.3 256 747 224 773.3 208L800 192L800 401L773.3 401C746.7 401 693 401 640 401C586.7 401 533 401 480 401C426.7 401 373 401 320 401C266.7 401 213 401 160 401C106.7 401 53 401 27 401L0 401Z"></path></svg>') no-repeat bottom;
            background-size: cover;
            color: white;
        }
        
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 2rem;
        }
        
        .features {
            padding: 4rem 0;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .section-title h2 {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .section-title p {
            color: var(--gray);
            max-width: 700px;
            margin: 0 auto;
        }
        
        .feature-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .feature-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
        }
        
        .feature-card-header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 1.5rem;
            text-align: center;
        }
        
        .feature-card-body {
            padding: 1.5rem;
        }
        
        .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .feature-card h3 {
            margin-bottom: 1rem;
            color: var(--secondary);
        }
        
        .dashboard {
            padding: 4rem 0;
            background-color: var(--light);
        }
        
        .dashboard-container {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 2rem;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }
        
        .sidebar {
            background: var(--secondary);
            color: white;
            padding: 2rem;
        }
        
        .sidebar h3 {
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
        }
        
        .sidebar-menu {
            list-style: none;
        }
        
        .sidebar-menu li {
            margin-bottom: 1rem;
        }
        
        .sidebar-menu a {
            color: white;
            text-decoration: none;
            display: flex;
            align-items: center;
            padding: 0.5rem;
            border-radius: 8px;
            transition: background 0.3s;
        }
        
        .sidebar-menu a:hover {
            background: rgba(255, 255, 255, 0.1);
        }
        
        .menu-icon {
            margin-right: 10px;
        }
        
        .main-content {
            padding: 2rem;
        }
        
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .genome-chart-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .chat-container {
            background: var(--light-gray);
            border-radius: 12px;
            padding: 1.5rem;
            height: 400px;
            display: flex;
            flex-direction: column;
        }
        
        .chat-messages {
            flex: 1;
            overflow-y: auto;
            margin-bottom: 1rem;
        }
        
        .message {
            margin-bottom: 1rem;
            padding: 0.8rem;
            border-radius: 12px;
            max-width: 80%;
        }
        
        .message.user {
            background: var(--primary);
            color: white;
            margin-left: auto;
        }
        
        .message.bot {
            background: white;
            border: 1px solid var(--light-gray);
        }
        
        .chat-input {
            display: flex;
        }
        
        .chat-input input {
            flex: 1;
            padding: 0.8rem;
            border: 1px solid var(--light-gray);
            border-radius: 50px 0 0 50px;
            outline: none;
        }
        
        .chat-input button {
            padding: 0.8rem 1.5rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 0 50px 50px 0;
            cursor: pointer;
        }
        
        .pathway-container {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .pathway-step {
            display: flex;
            margin-bottom: 1.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid var(--light-gray);
        }
        
        .step-number {
            background: var(--primary);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            flex-shrink: 0;
        }
        
        .step-content {
            flex: 1;
        }
        
        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
        }
        
        .skill-card {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .skill-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
        }
        
        .skill-progress {
            height: 10px;
            background: var(--light-gray);
            border-radius: 5px;
            overflow: hidden;
            margin-bottom: 1rem;
        }
        
        .skill-progress-bar {
            height: 100%;
            background: var(--primary);
            border-radius: 5px;
        }
        
        .skill-resources {
            margin-top: 1rem;
        }
        
        .resource-link {
            display: flex;
            align-items: center;
            color: var(--primary);
            text-decoration: none;
            margin-bottom: 0.5rem;
        }
        
        .resource-link:hover {
            text-decoration: underline;
        }
        
        footer {
            background: var(--dark);
            color: white;
            padding: 3rem 0;
            text-align: center;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            text-align: left;
        }
        
        .footer-section h3 {
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }
        
        .footer-section p {
            margin-bottom: 1rem;
        }
        
        .footer-bottom {
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        @media (max-width: 768px) {
            .dashboard-container {
                grid-template-columns: 1fr;
            }
            
            .sidebar {
                display: none;
            }
            
            .hero h1 {
                font-size: 2.2rem;
            }
            
            .header-content {
                flex-direction: column;
            }
            
            nav ul {
                margin-top: 1rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container header-content">
            <div class="logo">
                <span class="logo-icon">🧭</span>
                CareerCartographer.AI
            </div>
            <nav>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <a href="#dashboard" class="btn btn-outline">Get Started</a>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h1>Your Personal Career GPS</h1>
            <p>Navigate your future with AI-powered career guidance, personalized learning paths, and real-time market insights.</p>
            <a href="#dashboard" class="btn">Explore Your Career Genome</a>
        </div>
    </section>

    <section class="features" id="features">
        <div class="container">
            <div class="section-title">
                <h2>How CareerCartographer.AI Works</h2>
                <p>Our AI-powered platform helps you discover your ideal career path and build the skills needed to succeed</p>
            </div>
            <div class="feature-cards">
                <div class="feature-card">
                    <div class="feature-card-header">
                        <div class="feature-icon">🧬</div>
                        <h3>Career Genome Analysis</h3>
                    </div>
                    <div class="feature-card-body">
                        <p>Our AI creates a unique Career Genome profile based on your skills, interests, and personality traits, providing personalized career recommendations.</p>
                    </div>
                </div>
                <div class="feature-card">
                    <div class="feature-card-header">
                        <div class="feature-icon">🚀</div>
                        <h3>Adaptive Learning Pathways</h3>
                    </div>
                    <div class="feature-card-body">
                        <p>Get customized learning roadmaps that adapt to your progress and the evolving job market, with curated resources for each skill you need to develop.</p>
                    </div>
                </div>
                <div class="feature-card">
                    <div class="feature-card-header">
                        <div class="feature-icon">💬</div>
                        <h3>AI Mentor "Carto"</h3>
                    </div>
                    <div class="feature-card-body">
                        <p>Chat with our AI mentor for personalized career advice, interview practice, and explanations for why certain paths are recommended for you.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="dashboard" id="dashboard">
        <div class="container">
            <div class="section-title">
                <h2>Your Career Dashboard</h2>
                <p>Explore your Career Genome and personalized recommendations</p>
            </div>
            <div class="dashboard-container">
                <div class="sidebar">
                    <h3>Navigation</h3>
                    <ul class="sidebar-menu">
                        <li><a href="#tab-genome" class="tab-link" data-tab="genome"><span class="menu-icon">🧬</span> Career Genome</a></li>
                        <li><a href="#tab-pathways" class="tab-link" data-tab="pathways"><span class="menu-icon">🚀</span> Learning Pathways</a></li>
                        <li><a href="#tab-chat" class="tab-link" data-tab="chat"><span class="menu-icon">💬</span> AI Mentor Chat</a></li>
                        <li><a href="#tab-skills" class="tab-link" data-tab="skills"><span class="menu-icon">📊</span> Skills Analysis</a></li>
                        <li><a href="#tab-jobs" class="tab-link" data-tab="jobs"><span class="menu-icon">💼</span> Job Matches</a></li>
                    </ul>
                </div>
                <div class="main-content">
                    <div id="tab-genome" class="tab-content active">
                        <h3>Your Career Genome</h3>
                        <p>This is your unique career DNA based on your skills, interests, and personality.</p>
                        <div class="genome-chart-container">
                            <canvas id="genomeChart"></canvas>
                        </div>
                    </div>
                    
                    <div id="tab-pathways" class="tab-content">
                        <h3>Your Learning Pathway</h3>
                        <p>Here's your personalized learning journey to become a Data Scientist:</p>
                        <div class="pathway-container">
                            <div class="pathway-step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h4>Foundation Building (Month 1-2)</h4>
                                    <p>Focus on building fundamental skills in mathematics and programming</p>
                                    <ul>
                                        <li>Complete "Statistics Fundamentals" course</li>
                                        <li>Learn Python basics with our curated resources</li>
                                        <li>Practice with small data analysis projects</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pathway-step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h4>Core Data Science (Month 3-4)</h4>
                                    <p>Develop core data science skills and tools</p>
                                    <ul>
                                        <li>Master data manipulation with Pandas and NumPy</li>
                                        <li>Learn data visualization with Matplotlib and Seaborn</li>
                                        <li>Complete intermediate statistics course</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pathway-step">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h4>Machine Learning (Month 5-6)</h4>
                                    <p>Dive into machine learning algorithms and applications</p>
                                    <ul>
                                        <li>Study supervised and unsupervised learning</li>
                                        <li>Build your first ML models with Scikit-learn</li>
                                        <li>Participate in Kaggle competitions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="tab-chat" class="tab-content">
                        <h3>Chat with Carto, your AI Mentor</h3>
                        <p>Ask me anything about careers, skills, or your learning path!</p>
                        <div class="chat-container">
                            <div class="chat-messages">
                                <div class="message bot">
                                    <p>Hello! I'm Carto, your AI career advisor. How can I help you today?</p>
                                </div>
                                <div class="message user">
                                    <p>What careers are a good fit for me?</p>
                                </div>
                                <div class="message bot">
                                    <p>Based on your Career Genome, here are your top matches:</p>
                                    <ul>
                                        <li>Data Scientist (92% match)</li>
                                        <li>UX Researcher (88% match)</li>
                                        <li>Product Manager (85% match)</li>
                                    </ul>
                                    <p>Your strong analytical skills and creative problem-solving make these roles excellent fits!</p>
                                </div>
                            </div>
                            <div class="chat-input">
                                <input type="text" placeholder="Ask me anything about careers...">
                                <button>Send</button>
                            </div>
                        </div>
                    </div>
                    
                    <div id="tab-skills" class="tab-content">
                        <h3>Your Skills Analysis</h3>
                        <p>Here's how your current skills compare to requirements for Data Scientist roles:</p>
                        <div class="skills-container">
                            <div class="skill-card">
                                <div class="skill-header">
                                    <h4>Python Programming</h4>
                                    <span>65%</span>
                                </div>
                                <p>Your proficiency vs. required: 65% / 90%</p>
                                <div class="skill-progress">
                                    <div class="skill-progress-bar" style="width: 65%"></div>
                                </div>
                                <div class="skill-resources">
                                    <p><strong>Recommended resources:</strong></p>
                                    <a href="#" class="resource-link">Python for Data Science Crash Course</a>
                                    <a href="#" class="resource-link">Pandas Documentation</a>
                                </div>
                            </div>
                            <div class="skill-card">
                                <div class="skill-header">
                                    <h4>Statistics</h4>
                                    <span>70%</span>
                                </div>
                                <p>Your proficiency vs. required: 70% / 85%</p>
                                <div class="skill-progress">
                                    <div class="skill-progress-bar" style="width: 70%"></div>
                                </div>
                                <div class="skill-resources">
                                    <p><strong>Recommended resources:</strong></p>
                                    <a href="#" class="resource-link">Statistics Fundamentals Course</a>
                                    <a href="#" class="resource-link">Probability Practice Problems</a>
                                </div>
                            </div>
                            <div class="skill-card">
                                <div class="skill-header">
                                    <h4>Machine Learning</h4>
                                    <span>40%</span>
                                </div>
                                <p>Your proficiency vs. required: 40% / 80%</p>
                                <div class="skill-progress">
                                    <div class="skill-progress-bar" style="width: 40%"></div>
                                </div>
                                <div class="skill-resources">
                                    <p><strong>Recommended resources:</strong></p>
                                    <a href="#" class="resource-link">ML Fundamentals Specialization</a>
                                    <a href="#" class="resource-link">Scikit-learn Tutorials</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="tab-jobs" class="tab-content">
                        <h3>Your Top Career Matches</h3>
                        <p>Based on your Career Genome, here are your best-fit roles:</p>
                        <div class="skills-container">
                            <div class="skill-card">
                                <div class="skill-header">
                                    <h4>Data Scientist</h4>
                                    <span>92% match</span>
                                </div>
                                <p><strong>Why it's a good fit:</strong> Your strong analytical skills, curiosity, and programming foundation align perfectly with this role.</p>
                                <p><strong>Average Salary:</strong> ₹12-18 LPA</p>
                                <p><strong>Growth Outlook:</strong> Very High</p>
                            </div>
                            <div class="skill-card">
                                <div class="skill-header">
                                    <h4>UX Researcher</h4>
                                    <span>88% match</span>
                                </div>
                                <p><strong>Why it's a good fit:</strong> Your empathy, analytical thinking, and creativity make you well-suited for understanding user needs.</p>
                                <p><strong>Average Salary:</strong> ₹8-14 LPA</p>
                                <p><strong>Growth Outlook:</strong> High</p>
                            </div>
                            <div class="skill-card">
                                <div class="skill-header">
                                    <h4>Product Manager</h4>
                                    <span>85% match</span>
                                </div>
                                <p><strong>Why it's a good fit:</strong> Your balanced analytical and social skills, combined with strategic thinking, match this role well.</p>
                                <p><strong>Average Salary:</strong> ₹15-25 LPA</p>
                                <p><strong>Growth Outlook:</strong> High</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>CareerCartographer.AI</h3>
                    <p>Your AI-powered career navigation system, helping you map your skills to your dream career.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <p><a href="#features">Features</a></p>
                    <p><a href="#dashboard">Dashboard</a></p>
                    <p><a href="#about">About Us</a></p>
                    <p><a href="#contact">Contact</a></p>
                </div>
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: info@careercartographer.ai</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Address: Bangalore, India</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 CareerCartographer.AI. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Tab switching functionality
        document.querySelectorAll('.tab-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const tabId = this.getAttribute('data-tab');
                
                // Hide all tabs
                document.querySelectorAll('.tab-content').forEach(tab => {
                    tab.classList.remove('active');
                });
                
                // Show selected tab
                document.getElementById(`tab-${tabId}`).classList.add('active');
            });
        });
        
        // Initialize Career Genome chart
        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('genomeChart').getContext('2d');
            const genomeChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Analytical', 'Technical', 'Creative', 'Social', 'Managerial', 'Research'],
                    datasets: [{
                        label: 'Your Career Genome',
                        data: [85, 70, 65, 80, 60, 75],
                        backgroundColor: 'rgba(67, 97, 238, 0.2)',
                        borderColor: 'rgba(67, 97, 238, 1)',
                        pointBackgroundColor: 'rgba(67, 97, 238, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(67, 97, 238, 1)'
                    }]
                },
                options: {
                    elements: {
                        line: {
                            tension: 0.2
                        }
                    },
                    scales: {
                        r: {
                            angleLines: {
                                display: true
                            },
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    }
                }
            });
            
            // Simple chat functionality
            const chatInput = document.querySelector('.chat-input input');
            const chatButton = document.querySelector('.chat-input button');
            const chatMessages = document.querySelector('.chat-messages');
            
            chatButton.addEventListener('click', sendMessage);
            chatInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
            
            function sendMessage() {
                const message = chatInput.value.trim();
                if (message) {
                    // Add user message
                    addMessage(message, 'user');
                    
                    // Simulate AI response after a short delay
                    setTimeout(() => {
                        let response = '';
                        if (message.toLowerCase().includes('career') || message.toLowerCase().includes('job')) {
                            response = 'Based on your Career Genome, your top matches are Data Scientist, UX Researcher, and Product Manager. Your analytical skills and creativity make these roles excellent fits!';
                        } else if (message.toLowerCase().includes('skill') || message.toLowerCase().includes('learn')) {
                            response = 'I recommend focusing on Python, Statistics, and Machine Learning first. These are fundamental for your target role of Data Scientist. Would you like me to create a learning plan for you?';
                        } else if (message.toLowerCase().includes('pathway') || message.toLowerCase().includes('plan')) {
                            response = 'Your learning pathway is already generated! Check the "Learning Pathways" tab for your customized step-by-step plan to become a Data Scientist.';
                        } else {
                            response = 'I\'m here to help with your career journey! You can ask me about career matches, skills development, learning pathways, or anything else related to your professional growth.';
                        }
                        addMessage(response, 'bot');
                    }, 1000);
                    
                    // Clear input
                    chatInput.value = '';
                }
            }
            
            function addMessage(text, sender) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message', sender);
                messageDiv.innerHTML = `<p>${text}</p>`;
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        });
    </script>
</body>
</html>
