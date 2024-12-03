// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Navbar -->
      <nav class="bg-white border-b px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-8">
            <h1 class="text-xl font-bold">hireHQ</h1>
            <div class="flex gap-6">
              <a href="#" class="text-gray-600">Home</a>
              <a href="#" class="text-indigo-600 border-b-2 border-indigo-600">Find Jobs</a>
              <a href="#" class="text-gray-600">My Jobs</a>
              <a href="#" class="text-gray-600">Interview</a>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <input type="text" placeholder="Search job here.." 
              class="w-64 px-4 py-2 border rounded-lg">
            <div class="w-8 h-8 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-8">
        <div class="flex gap-8">
          <!-- Sidebar -->
          <div class="w-1/4">
            <div class="bg-white p-6 rounded-lg border">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-lg font-semibold">Filter</h2>
                <button class="text-blue-500">Reset</button>
              </div>
              
              <div class="space-y-6">
                <div>
                  <h3 class="font-medium mb-2">Location</h3>
                  <input type="text" placeholder="Search location" 
                    class="w-full px-4 py-2 border rounded-lg">
                </div>

                <div>
                  <h3 class="font-medium mb-2">Pay range</h3>
                  <div class="flex items-center gap-4">
                    <input type="number" placeholder="Min" class="w-24 px-3 py-2 border rounded-lg">
                    <span>-</span>
                    <input type="number" placeholder="Max" class="w-24 px-3 py-2 border rounded-lg">
                  </div>
                </div>

                <div>
                  <h3 class="font-medium mb-2">Experience Level</h3>
                  <div class="space-y-2">
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox">
                      <span class="ml-2">Internship</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox">
                      <span class="ml-2">Entry Level</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Job Listings -->
          <div class="w-3/4">
            <div class="flex justify-between items-center mb-6">
              <p>Showing: 120 jobs</p>
              <select class="border rounded-lg px-4 py-2">
                <option>Sort by: Latest</option>
              </select>
            </div>

            <div class="space-y-4">
              <div *ngFor="let job of jobs" class="bg-white p-6 rounded-lg border">
                <div class="flex justify-between">
                  <div class="flex gap-4">
                    <img [src]="job.logo" class="w-12 h-12 rounded-lg">
                    <div>
                      <h3 class="font-semibold">{{job.title}}</h3>
                      <div class="flex gap-2 text-sm text-gray-600">
                        <span>{{job.company}}</span>
                        <span>•</span>
                        <span>{{job.location}}</span>
                        <span>•</span>
                        <span>{{job.postedTime}}</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-2">
                    <button class="p-2 rounded-lg border hover:bg-gray-50">
                      <span class="sr-only">Save</span>
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <p class="mt-4 text-gray-600">{{job.description}}</p>

                <div class="flex gap-2 mt-4">
                  <span *ngFor="let type of job.workType" 
                    [class]="'px-3 py-1 rounded-full text-sm ' + getWorkTypeClass(type)">
                    {{type}}
                  </span>
                </div>

                <div class="flex gap-2 mt-4">
                  <span *ngFor="let skill of job.skills" 
                    class="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm">
                    {{skill}}
                  </span>
                  <span class="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm">
                    +3 more
                  </span>
                </div>

                <div class="flex justify-between items-center mt-4">
                  <p class="font-semibold">{{job.salary}}</p>
                  <button class="px-6 py-2 bg-indigo-900 text-white rounded-lg">
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  jobs = [
    {
      company: 'Google',
      logo: 'assets/google.png',
      title: 'UI/UX Designer',
      location: 'Delhi, India',
      postedTime: '3 Days ago',
      workType: ['Full Time', 'Hybrid', '0-4 years'],
      description: 'We are seeking a compassionate and skilled Registered Nurse (RN) to join our healthcare team. In this role, you will provide direct patient care, work collaboratively with healthcare teams, and play a crucial part in ensuring quality and continuity of care.',
      skills: ['UI/UX Designer', 'User Flows', 'Information Architecture'],
      salary: '$40-$65 /hour'
    },
    {
      company: 'Whatsapp',
      logo: 'assets/whatsapp.png',
      title: 'Front-end developer',
      location: 'Delhi, India',
      postedTime: '3 Days ago',
      workType: ['Full Time', 'Hybrid', '0-4 years'],
      description: 'We are seeking a compassionate and skilled Registered Nurse (RN) to join our healthcare team. In this role, you will provide direct patient care, work collaboratively with healthcare teams, and play a crucial part in ensuring quality and continuity of care.',
      skills: ['UI/UX Designer', 'User Flows', 'Information Architecture'],
      salary: '$40-$65 /hour'
    }
  ];

  getWorkTypeClass(type: string): string {
    const classes = {
      'Full Time': 'bg-blue-50 text-blue-600',
      'Hybrid': 'bg-purple-50 text-purple-600',
      '0-4 years': 'bg-orange-50 text-orange-600'
    };
    return classes[type] || 'bg-gray-50 text-gray-600';
  }
}