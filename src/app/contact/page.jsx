export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-4">
      <h1>Contact Us</h1>
      <form className="bg-red-500" action="">
        <div className="w-full flex flex-col">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
      </form>
    </main>
  );
}
