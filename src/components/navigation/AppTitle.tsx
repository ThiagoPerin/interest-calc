import Logo from "./logo";
import Linkedin from '../../assets/linkedin.svg';
import Github from '../../assets/github.svg';

function AppTitle() {
    return (
        <>
            <h1 className="flex items-center pt-4 pb-1 rounded">
                <Logo />
                <span className="text-4xl font-light text-white ml-4">INTEREST CALC</span>
            </h1>
            <h2 className='text-white text-md pb-4'>Your compound interest calculator</h2>
            <div className="h-fit w-fit flex pb-4">
                <a href="https://www.linkedin.com/in/thiagoperinfelipedacruz/" className='mx-3'>
                    <img src={Linkedin} className='size-6 fill-white' alt='Linkedin icon' />
                </a>
                <a href="https://github.com/ThiagoPerin/interest-calc" className='mx-3'>
                    <img src={Github} className='size-6 fill-white' alt='Github icon' />
                </a>
            </div>
        </>
    );
}

export default AppTitle;

