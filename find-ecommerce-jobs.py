import json
import sys
import os

def find_ecommerce_dashboard_jobs(filename):
    # Load job data
    print(f"Loading jobs from: {filename}")
    if not os.path.exists(filename):
        print(f"File not found: {filename}")
        return []
        
    try:
        with open(filename, 'r') as f:
            jobs = json.load(f)
        print(f"Loaded {len(jobs)} jobs")
    except Exception as e:
        print(f"Error loading file: {e}")
        return []
    
    # Keywords for e-commerce/retail dashboards
    dashboard_keywords = ['dashboard', 'analytics', 'reporting', 'visualization', 'kpi', 'metrics', 'insights', 'business intelligence', 'reports', 'data visualization']
    ecommerce_keywords = ['ecommerce', 'e-commerce', 'shopify', 'woocommerce', 'retail', 'inventory', 'sales analytics', 'product', 'order', 'customer analytics', 'revenue', 'store', 'merchant', 'catalog']
    
    # Filter jobs
    relevant_jobs = []
    for i, job in enumerate(jobs):
        if i % 100 == 0:
            print(f"Processing job {i}...")
            
        title_lower = job.get('title', '').lower()
        desc_lower = job.get('description', '').lower()
        
        # Check if job is related to dashboards AND e-commerce/retail
        dashboard_score = sum(1 for kw in dashboard_keywords if kw in title_lower or kw in desc_lower)
        ecommerce_score = sum(1 for kw in ecommerce_keywords if kw in title_lower or kw in desc_lower)
        
        # Also check for general dashboards that mention sales/revenue
        is_sales_dashboard = ('dashboard' in title_lower or 'analytics' in title_lower) and \
                           any(kw in desc_lower for kw in ['sales', 'revenue', 'orders', 'customers', 'products'])
        
        if (dashboard_score > 0 and ecommerce_score > 0) or is_sales_dashboard:
            relevant_jobs.append({
                'title': job.get('title'),
                'description': job.get('description')[:800] + '...' if len(job.get('description', '')) > 800 else job.get('description'),
                'budget': job.get('budget'),
                'duration': job.get('duration'),
                'skills': job.get('skills', [])[:15],
                'posted': job.get('posted'),
                'client_info': job.get('client', {}),
                'relevance_score': dashboard_score + ecommerce_score + (2 if is_sales_dashboard else 0)
            })
    
    print(f"Found {len(relevant_jobs)} relevant jobs")
    
    # Sort by relevance score
    relevant_jobs.sort(key=lambda x: x['relevance_score'], reverse=True)
    
    # Return top 10
    return relevant_jobs[:10]

if __name__ == "__main__":
    filename = sys.argv[1] if len(sys.argv) > 1 else '/Users/cybermelon/Documents/GitHub/upwork/upwork-job-scraper/upwork-jobs-2025-06-10.json'
    jobs = find_ecommerce_dashboard_jobs(filename)
    
    print("\n=== TOP E-COMMERCE/RETAIL DASHBOARD JOBS ===\n")
    for i, job in enumerate(jobs, 1):
        print(f"\n{'='*60}")
        print(f"JOB #{i}: {job['title']}")
        print(f"Budget: {job['budget']}")
        print(f"Duration: {job['duration']}")
        print(f"Skills: {', '.join(job['skills'][:8]) if job['skills'] else 'Not specified'}")
        print(f"Relevance Score: {job['relevance_score']}")
        print(f"\nDescription:\n{job['description'][:500]}...")
        print(f"{'='*60}")