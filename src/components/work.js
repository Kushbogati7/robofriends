
// main layout/viewer page is build by this file
function Robot({name,email,id}) {
    
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt= "hello" src={`https://robohash.org/${name}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Robot;