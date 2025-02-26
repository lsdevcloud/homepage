import '../assets/components/header.css';

export default function Header()
{

    function randomImage()
    {

        const random = Math.round((Math.random() * 5) + 1);
        return random;
    }

	return (
		<div class='header'>
			<div class='header-title'>
			    <h2>
                    <a href='/'>
                        <img id='header-image' alt='== lsdevcloud.com ==' src={`/hdrimg-${randomImage()}.png`} />
                    </a>
                </h2>
			</div>
		</div>
	)
}
