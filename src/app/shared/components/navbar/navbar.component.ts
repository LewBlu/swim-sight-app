import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    if (!this.element.nativeElement.contains(event.target)){
      this.showProfileMenu = false;
      this.showMobileMenu = false;
    }
  }

  public showProfileMenu: boolean = false;
  public showMobileMenu: boolean = false;

  constructor(private element: ElementRef, private authService: AuthService) {}

  public toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  public toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  // When the user clicks 'Sign out' from within the profile menu
  public onLogout() {
    this.authService.logoutUser();
  }
}
