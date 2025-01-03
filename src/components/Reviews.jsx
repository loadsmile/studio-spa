import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const Reviews = () => {
  const reviews = [
    {
      name: "Sydney Johnsen",
      date: "Dec 2024",
      rating: 5,
      text: "I immensely enjoyed my experience with/at Mila! She was easy to book and communicate with right away. The studio space itself was so calming, peaceful and inviting… I loved the vibe and scents. My hair is SO soft still 4 days later and it was one of the best massages I've ever received. If I find myself back in Lisbon, I will totally go back. Thank you Mila <3"
    },
    {
      name: "Bianca Novais",
      date: "Dec 2024",
      rating: 5,
      text: "Desde a recepção a Camila foi super atenciosa e cuidadosa. Fiz 90 minutos de massagem terapêutica e pedras quentes e ameeei!! Super recomendo! ainda ganhei um mimo no final 🥰 Recomendo muito e pretendo voltar! ✨🥰"
    },
    {
      name: "Carla",
      date: "Nov 2024",
      rating: 5,
      text: "A Camila proporcionou-me uma experiência verdadeiramente de sonho, em 90 minutos que passaram a voar. Não podia ter escolhido melhor forma de iniciar o meu dia de aniversário e não vejo a hora de repetir! Senti-me acolhida, nutrida e mimada e a simpatia da Camila tornaram a experiência ainda mais agradável."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Reviews</h2>
        <div className="space-y-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <h3 className="font-bold">{review.name}</h3>
                <div className="flex items-center space-x-2 my-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-gray-900" />
                  ))}
                </div>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
