
const testimonialsData = [
  { text: "I want to learn TIG.Ashuganj traning center provided me right guidance", name: "Trek Mia, Ashuganj", profilePic: "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3" },
  { text: "Best for newcomers ", name: "Sadiur Bhai,Chorchartola", profilePic: "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3" },
  { text: "Best Traning center in Ashuganj Upazilla", name: "Raju ,LaLpur", profilePic: "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3" },

]


function Testimonials() {


  return (
    <>
      <div className="grid place-items-center w-full ">
        <div className="max-w-6xl px-4 py-24 content-center justify-center">
          <h1 className="text-3xl  text-center font-bold">Testimonials</h1>
          <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
            {
              testimonialsData.map((t, k) => {
                return (
                  <div key={k} className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img className="mask w-20 h-20 mask-circle object-cover" src={t.profilePic} />
                    </figure>
                    <div className="card-body items-center text-center">
                      <p>{t.text}</p>
                      <p className="text-slate-500">-{t.name}</p>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
