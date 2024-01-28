import girl_hat from '../../assets/girl_hat.jpeg';

export default function LongCard() {
  return (
    <div className="m-4 py-3 px-6 bg-white">
      <div className="my-3 font-semibold text-2xl text-center">
        TITLE HEADING
      </div>
      <div className="text-lg text-center">
        <span className="font-semibold">Title description, </span>
        <span className="text-gray-500"> May 2, 2016</span>
      </div>
      <img
        className="my-3 w-full"
        src={girl_hat}
        alt="IMG"
      />

      <div className="font-lg open-sans">
        <p>
          More Hats! I am crazy about hats these days. Some text about this blog
          entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae,
          convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.
          Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus
          sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus
          ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla.
        </p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </div>
    </div>
  );
}
