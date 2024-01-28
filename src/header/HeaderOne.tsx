import WhiteIcon from './WhiteIcon';

export default function HeaderOne() {
  return (
    <div className="hidden bg-black md:flex justify-between">
      <div>
        <WhiteIcon>facebook-official</WhiteIcon>
        <WhiteIcon>instagram</WhiteIcon>
        <WhiteIcon>snapchat</WhiteIcon>
        <WhiteIcon>flickr</WhiteIcon>
        <WhiteIcon>twitter</WhiteIcon>
        <WhiteIcon>linkedin</WhiteIcon>
      </div>

      <WhiteIcon>search</WhiteIcon>
    </div>
  );
}
