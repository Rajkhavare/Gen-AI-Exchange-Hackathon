<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CareerCartographer.AI - Wireframes & Mockups</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f5f7fb;
            color: #333;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            background: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
            color: white;
            padding: 20px 0;
            text-align: center;
            border-radius: 0 0 20px 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            margin-bottom: 30px;
        }
        
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
        }
        
        .logo-icon {
            font-size: 2.5rem;
            margin-right: 15px;
        }
        
        .logo-text {
            font-size: 2rem;
            font-weight: 700;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .tabs {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }
        
        .tab {
            padding: 12px 24px;
            background-color: #fff;
            margin: 0 10px 10px;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 600;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
        
        .tab.active {
            background-color: #4361ee;
            color: white;
        }
        
        .tab:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        .wireframe-content {
            display: none;
        }
        
        .wireframe-content.active {
            display: block;
        }
        
        .wireframe-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }
        
        .wireframe-card {
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        
        .wireframe-card:hover {
            transform: translateY(-5px);
        }
        
        .card-header {
            background: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
            color: white;
            padding: 15px 20px;
            font-weight: 600;
            display: flex;
            align-items: center;
        }
        
        .card-icon {
            margin-right: 10px;
            font-size: 1.2rem;
        }
        
        .card-body {
            padding: 20px;
        }
        
        .mockup {
            background-color: #f0f4ff;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 15px;
            position: relative;
            min-height: 200px;
        }
        
        .screen-content {
            background-color: white;
            border-radius: 6px;
            padding: 15px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
            height: 100%;
        }
        
        .screen-element {
            background-color: #f5f7fb;
            margin-bottom: 10px;
            padding: 8px;
            border-radius: 4px;
            border-left: 3px solid #4361ee;
        }
        
        .description {
            margin-top: 15px;
            color: #555;
            font-size: 0.95rem;
        }
        
        .full-width {
            grid-column: 1 / -1;
        }
        
        .process-diagram {
            background-color: white;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
            margin-bottom: 40px;
        }
        
        .diagram-title {
            text-align: center;
            margin-bottom: 25px;
            color: #3a0ca3;
            font-weight: 700;
            font-size: 1.5rem;
        }
        
        .process-steps {
            display: flex;
            justify-content: space-between;
            position: relative;
            margin: 30px 0;
        }
        
        .process-steps::before {
            content: '';
            position: absolute;
            top: 40px;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(to right, #4361ee, #3a0ca3);
            z-index: 1;
        }
        
        .step {
            text-align: center;
            position: relative;
            z-index: 2;
            width: 20%;
        }
        
        .step-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
            margin: 0 auto 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.8rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .step-text {
            font-weight: 600;
            color: #3a0ca3;
        }
        
        footer {
            text-align: center;
            padding: 20px;
            margin-top: 40px;
            color: #666;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .wireframe-grid {
                grid-template-columns: 1fr;
            }
            
            .process-steps {
                flex-direction: column;
            }
            
            .process-steps::before {
                display: none;
            }
            
            .step {
                width: 100%;
                margin-bottom: 30px;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="logo">
                <div class="logo-icon">🧭</div>
                <div class="logo-text">CareerCartographer.AI</div>
            </div>
            <h1>Wireframes & Mock Diagrams</h1>
            <p class="subtitle">Visualizing the user experience and interface design for our AI-powered career guidance platform</p>
        </div>
    </header>

    <div class="container">
        <div class="tabs">
            <div class="tab active" data-tab="overview">Overview</div>
            <div class="tab" data-tab="onboarding">Onboarding</div>
            <div class="tab" data-tab="dashboard">Dashboard</div>
            <div class="tab" data-tab="genome">Career Genome</div>
            <div class="tab" data-tab="pathways">Learning Pathways</div>
            <div class="tab" data-tab="chat">AI Mentor Chat</div>
        </div>

        <div class="wireframe-content active" id="overview">
            <div class="process-diagram">
                <h2 class="diagram-title">User Journey Process Flow</h2>
                <div class="process-steps">
                    <div class="step">
                        <div class="step-circle">1</div>
                        <div class="step-text">Sign Up & Onboarding</div>
                    </div>
                    <div class="step">
                        <div class="step-circle">2</div>
                        <div class="step-text">Career Genome Assessment</div>
                    </div>
                    <div class="step">
                        <div class="step-circle">3</div>
                        <div class="step-text">Personalized Dashboard</div>
                    </div>
                    <div class="step">
                        <div class="step-circle">4</div>
                        <div class="step-text">Explore Career Matches</div>
                    </div>
                    <div class="step">
                        <div class="step-circle">5</div>
                        <div class="step-text">Learning Pathway & AI Chat</div>
                    </div>
                </div>
            </div>

            <div class="wireframe-grid">
                <div class="wireframe-card full-width">
                    <div class="card-header">
                        <i class="fas fa-mobile-alt card-icon"></i>
                        Responsive Design Overview
                    </div>
                    <div class="card-body">
                        <div class="mockup">
                            <div class="screen-content">
                                <div class="screen-element" style="height: 30px; width: 60%; margin: 0 auto 20px; background-color: #4361ee; border-radius: 50px;"></div>
                                <div class="screen-element" style="height: 150px; width: 80%; margin: 0 auto 20px; border-radius: 12px; background: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);"></div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                                    <div class="screen-element" style="width: 30%; height: 100px;"></div>
                                    <div class="screen-element" style="width: 30%; height: 100px;"></div>
                                    <div class="screen-element" style="width: 30%; height: 100px;"></div>
                                </div>
                                <div class="screen-element" style="height: 40px; width: 50%; margin: 0 auto; background-color: #3a0ca3; border-radius: 50px;"></div>
                            </div>
                        </div>
                        <p class="description">The platform is designed with a mobile-first approach, ensuring seamless experience across all devices with intuitive navigation and adaptive layouts.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="wireframe-content" id="onboarding">
            <div class="wireframe-grid">
                <div class="wireframe-card">
                    <div class="card-header">
                        <i class="fas fa-sign-in-alt card-icon"></i>
                        Sign Up Screen
                    </div>
                    <div class="card-body">
                        <div class="mockup">
                            <div class="screen-content">
                                <div class="screen-element" style="height: 40px; width: 70%; margin: 10px auto 20px; background-color: #4361ee; border-radius: 8px;"></div>
                                <div class="screen-element" style="height: 15px; width: 80%; margin: 15px auto;"></div>
                                <div class="screen-element" style="height: 15px; width: 80%; margin: 15px auto;"></div>
                                <div class="screen-element" style="height: 15px; width: 80%; margin: 15px auto;"></div>
                                <div class="screen-element" style="height: 40px; width: 50%; margin: 20px auto; background-color: #3a0ca3; border-radius: 8px;"></div>
                            </div>
                        </div>
                        <p class="description">Simple sign up process with email or social media accounts, with clear call-to-action buttons.</p>
                    </div>
                </div>

                <div class="wireframe-card">
                    <div class="card-header">
                        <i class="fas fa-clipboard-list card-icon"></i>
                        Initial Assessment
                    </div>
                    <div class="card-body">
                        <div class="mockup">
                            <div class="screen-content">
                                <div class="screen-element" style="height: 15px; width: 60%; margin: 15px auto 10px;"></div>
                                <div class="screen-element" style="height: 10px; width: 40%; margin: 0 auto 20px;"></div>
                                <div class="screen-element" style="height: 40px; width: 90%; margin: 10px auto; border-left: 3px solid #4361ee;"></div>
                                <div class="screen-element" style="height: 40px; width: 90%; margin: 10px auto; border-left: 3px solid #4361ee;"></div>
                                <div class="screen-element" style="height: 40px; width: 90%; margin: 10px auto; border-left: 3px solid #4361ee;"></div>
                                <div class="screen-element" style="height: 40px; width: 50%; margin: 20px auto; background-color: #3a0ca3; border-radius: 8px;"></div>
                            </div>
                        </div>
                        <p class="description">Interactive assessment with progress indicators and engaging question formats to understand user's skills and interests.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="wireframe-content" id="dashboard">
            <div class="wireframe-grid">
                <div class="wireframe-card">
                    <div class="card-header">
                        <i class="fas fa-home card-icon"></i>
                        Main Dashboard
                    </div>
                    <div class="card-body">
                        <div class="mockup">
                            <div class="screen-content">
                                <div class="screen-element" style="height: 30px; width: 60%; margin: 0 auto 15px; background-color: #4361ee; border-radius: 8px;"></div>
                                <div class="screen-element" style="height: 120px; width: 90%; margin: 0 auto 15px; border-radius: 12px; background: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);"></div>
                                <div class="screen-element" style="height: 15px; width: 80%; margin: 5px auto;"></div>
                                <div class="screen-element" style="height: 15px; width: 60%; margin: 5px auto 15px;"></div>
                                <div style="display: flex; justify-content: space-between;">
                                    <div class="screen-element" style="width: 45%; height: 70px; border-radius: 8px;"></div>
                                    <div class="screen-element" style="width: 45%; height: 70px; border-radius: 8px;"></div>
                                </div>
                            </div>
                        </div>
                        <p class="description">Personalized dashboard showing career matches, progress tracking, and recommended actions in a clean, organized layout.</p>
                    </div>
                </div>

                <div class="wireframe-card">
                    <div class="card-header">
                        <i class="fas fa-chart-line card-icon"></i>
                        Progress Tracking
                    </div>
                    <div class="card-body">
                        <div class="mockup">
                            <div class="screen-content">
                                <div class="screen-element" style="height: 20px; width: 70%; margin: 10px auto;"></div>
                                <div class="screen-element" style="height: 150px; width: 90%; margin: 0 auto 15px; border-radius: 8px;"></div>
                                <div class="screen-element" style="height: 15px; width: 80%; margin: 5px auto;"></div>
                                <div class="screen-element" style="height: 15px; width: 60%; margin: 5px auto 15px;"></div>
                                <div class="screen-element" style="height: 30px; width: 70%; margin: 0 auto; background-color: #3a0ca3; border-radius: 8px;"></div>
                            </div>
                        </div>
                        <p class="description">Visual progress tracking with charts and metrics to show skill development and pathway completion.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="wireframe-content" id="genome">
            <div class="wireframe-grid">
                <div class="wireframe-card">
                    <div class="card-header">
                        <i class="fas-dna card-icon"></i>
                        Career Genome Visualization
                    </div>
                    <div class="card-body">
                        <div class="mockup">
                            <div class="screen-content">
                                <div class="screen-element" style="height: 20px; width: 70%; margin: 10px auto;"></div>
                                <div style="width: 200px; height: 200px; margin: 0 auto; border-radius: 50%; background: conic-gradient(#4361ee 0% 30%, #3a0ca3 30% 65%, #4cc9f0 65% 100%);"></div>
                                <div class="screen-element" style="height: 15px; width: 80%; margin: 15px auto;"></div>
                                <div class="screen-element" style="height: 15px; width: 60%; margin: 5px auto 15px;"></div>
                            </div>
                        </div>
                        <p class="description">Interactive radar chart visualizing the user's unique Career Genome across multiple dimensions like analytical, technical, creative, and social skills.</p>
                    </div>
                </div>

                <div class="wireframe-card">
                    <div class="card-header">
                        <i class="fas fa-briefcase card-icon"></i>
                        Career Matches
                    </div>
                    <div class="card-body">
                        <div class="mockup">
                            <div class="screen-content">
                                <div class="screen-element" style="height: 20px; width: 70%; margin: 10px auto;"></div>
                                <div class="screen-element" style="height: 80px; width: 90%; margin: 10px auto; border-radius: 8px; border-left: 5px solid #4361ee;"></div>
                                <div class="screen-element" style="height: 80px; width: 90%; margin: 10px auto; border-radius: 8px; border-left: 5px solid #3a0ca3;"></div>
                                <div class="screen-element" style="height: 80px; width: 90%; margin: 10px auto; border-radius: 8px; border-left: 5px solid #4cc9f0;"></div>
                            </div>
                        </div>
                        <p class="description">Personalized career recommendations with compatibility scores, salary ranges, and growth outlook for each suggested career path.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="wireframe-content" id="pathways">
            <div class="wireframe-grid">
                <div class="wireframe-card">
                    <div class="card-header">
                        <i class="fas fa-road card-icon"></i>
                        Learning Pathway
                    </div>
                    <div class="card-body">
                        <div class="mockup">
                            <div class="screen-content">
                                <div class="screen-element" style="height: 20px; width: 70%; margin: 10px auto;"></div>
                                <div class="screen-element" style="height: 25px; width: 90%; margin: 15px auto; border-radius: 5px; background-color: #4361ee;"></div>
                                <div class="screen-element" style="height: 15px; width: 80%; margin: 5px auto;"></div>
                                <div class="screen-element" style="height: 25px; width: 90%; margin: 15px auto; border-radius: 5px; background-color: #3a0ca3;"></div>
                                <div class="screen-element" style="height: 15px; width: 80%; margin: 5px auto;"></div>
                                <div class="screen-element" style="height: 25px; width: 90%; margin: 15px auto; border-radius: 5px; background-color: #4cc9f0;"></div>
                                <div class="screen-element" style="height: 30px; width: 50%; margin: 20px auto; background-color: #3a0ca3; border-radius: 8px;"></div>
                            </div>
                        </div>
                        <p class="description">Step-by-step learning pathway with milestones, recommended resources, and progress tracking for skill development.</p>
                    </div>
                </div>

                <div class="wireframe-card">
                    <div class="card-header">
                        <i class="fas fa-book-open card-icon"></i>
                        Resource Recommendations
                    </div>
                    <div class="card-body">
                        <div class="mockup">
                            <div class="screen-content">
                                <div class="screen-element" style="height: 20px; width: 70%; margin: 10px auto;"></div>
                                <div class="screen-element" style="height: 60px; width: 90%; margin: 10px auto; border-radius: 8px;"></div>
                                <div class="screen-element" style="height: 60px; width: 90%; margin: 10px auto; border-radius: 8px;"></div>
                                <div class="screen-element" style="height: 60px; width: 90%; margin: 10px auto; border-radius: 8px;"></div>
                                <div class="screen-element" style="height: 15px; width: 40%; margin: 10px auto; background-color: #4361ee; border-radius: 8px;"></div>
                            </div>
                        </div>
                        <p class="description">Curated learning resources including courses, articles, and projects tailored to the user's specific career goals and skill gaps.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="wireframe-content" id="chat">
            <div class="wireframe-grid">
                <div class="wireframe-card">
                    <div class="card-header">
                        <i class="fas fa-comments card-icon"></i>
                        AI Mentor Chat
                    </div>
                    <div class="card-body">
                        <div class="mockup">
                            <div class="screen-content">
                                <div class="screen-element" style="height: 30px; width: 60%; margin: 0 auto 15px; background-color: #4361ee; border-radius: 8px;"></div>
                                <div class="screen-element" style="height: 40px; width: 70%; margin: 10px 10px 10px auto; border-radius: 15px 15px 0 15px; background-color: #e6e9ff;"></div>
                                <div class="screen-element" style="height: 60px; width: 80%; margin: 10px auto 10px 10px; border-radius: 15px 15px 15px 0; background-color: #f0f4ff;"></div>
                                <div class="screen-element" style="height: 40px; width: 70%; margin: 10px 10px 10px auto; border-radius: 15px 15px 0 15px; background-color: #e6e9ff;"></div>
                                <div class="screen-element" style="height: 40px; width: 90%; margin: 20px auto 0; border-radius: 20px; background-color: #f5f7fb;"></div>
                            </div>
                        </div>
                        <p class="description">Conversational interface with the AI mentor "Carto" for career advice, interview practice, and personalized guidance.</p>
                    </div>
                </div>

                <div class="wireframe-card">
                    <div class="card-header">
                        <i class="fas fa-lightbulb card-icon"></i>
                        Career Insights
                    </div>
                    <div class="card-body">
                        <div class="mockup">
                            <div class="screen-content">
                                <div class="screen-element" style="height: 20px; width: 70%; margin: 10px auto;"></div>
                                <div class="screen-element" style="height: 80px; width: 90%; margin: 10px auto; border-radius: 8px; background: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);"></div>
                                <div class="screen-element" style="height: 15px; width: 80%; margin: 15px auto 5px;"></div>
                                <div class="screen-element" style="height: 15px; width: 90%; margin: 5px auto;"></div>
                                <div class="screen-element" style="height: 15px; width: 70%; margin: 5px auto 15px;"></div>
                                <div class="screen-element" style="height: 30px; width: 50%; margin: 0 auto; background-color: #3a0ca3; border-radius: 8px;"></div>
                            </div>
                        </div>
                        <p class="description">AI-generated insights about career trends, skill demands, and personalized recommendations based on the user's profile and goals.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <div class="container">
            <p>CareerCartographer.AI &copy; 2023 | AI-Powered Career Guidance Platform</p>
            <p>Wireframes and mock diagrams for the GenAI Exchange Hackathon</p>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const tabs = document.querySelectorAll('.tab');
            const contents = document.querySelectorAll('.wireframe-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tabId = tab.getAttribute('data-tab');
                    
                    // Update active tab
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    // Show corresponding content
                    contents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === tabId) {
                            content.classList.add('active');
                        }
                    });
                });
            });
        });
    </script>
</body>
</html>
