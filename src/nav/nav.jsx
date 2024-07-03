import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

function Nav(props){
    return (
        <>
        <Navbar fluid rounded>
        <NavbarBrand href="/">
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Career.Net</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button>Get started</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="job">Find Job</NavbarLink>
          <NavbarLink href="job">Hires</NavbarLink>
          <NavbarLink href="job">Build a Business</NavbarLink>
          <NavbarLink href="job">Community</NavbarLink>
        </NavbarCollapse>
      </Navbar>
  </>
         
    );
}

export default Nav