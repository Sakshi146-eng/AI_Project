
---

## Technology Stack

| Component | Technology | Purpose |
|------------|-------------|----------|
| Frontend | React 18+ | User interface |
| Monitoring | OpenCV.js | Real-time browser monitoring |
| Backend | Django 4.2+ | Core API and business logic |
| Database | PostgreSQL 14+ | Persistent storage |
| Cache/Queue | Redis 7+ | Caching and async tasks |
| AI Engine | LangChain + Meta LLaMA | AI question generation |
| Authentication | Django REST Auth | Secure access |
| Deployment | Docker + Kubernetes | Containerized deployment |
| Monitoring | Prometheus + Grafana | Metrics and performance |

---

## Prerequisites

### System Requirements
- **OS:** Linux, macOS, or Windows  
- **RAM:** 8GB+ (16GB recommended)  
- **CPU:** 4+ cores  
- **Storage:** 50GB+ free space  

### Software Dependencies
- Python 3.9+  
- Node.js 16+  
- PostgreSQL 14+  
- Redis 7+  
- Docker 20.10+  
- Git (latest)  

---

## Installation

### Option 1: Manual Installation

#### Backend Setup
```bash
git clone https://github.com/yourorg/interxai.git
cd interxai/backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver


