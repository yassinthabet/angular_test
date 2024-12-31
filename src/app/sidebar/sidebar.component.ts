import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isMobile = false; 
  isSidebarOpen = false;

  constructor() {
    this.checkScreenSize(); 
  }


  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; 
    if (!this.isMobile) {
      this.isSidebarOpen = false; 
    }
  }

  
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
