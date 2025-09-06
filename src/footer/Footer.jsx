
import '../index.css'

const Footer = () => {
    

    return (<div className='border-t-2 shadow-md rounded-lg'>
        <footer className="px-4 divide-y ">
	<div className="container flex flex-col justify-between py-5 mx-auto space-y-6 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3 justify-center text-center flex flex-col lg:pl-10">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-full ">
				<img className=" self-center w-8 h-8 lg:w-10 lg:h-10 sm:block shadow-lg rounded-md " src="/assets/arts.jpg" alt="" />				</div>
				<span className="self-center text-2xl font-semibold"> C͡r͡a͡ƒ͡t͡i͡q͡u͡e </span>
			</a>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-6 lg:w-2/3 sm:grid-cols-4 p-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase  ">Product</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Features</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Integrations</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Pricing</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase ">Company</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase  ">Developers</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Public Reviews</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Documentation</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Guides</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase  ">Social media</div>
				<div className="flex justify-start space-x-3">
					<a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
						
					</a>
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center ">© 2024 C͡r͡a͡ƒ͡t͡i͡q͡u͡e Co. All rights reserved.</div>
</footer></div>
    );
};

export default Footer;
