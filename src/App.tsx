import { Controller, useForm } from "react-hook-form";

function App() {
  const form = useForm({
    shouldUnregister: true,
    defaultValues: {
      name: "",
      optional: "",
    },
  });

  const { isDirty } = form.formState;

  return (
    <>
      <p>isDirty: {isDirty ? "true" : "false"}</p>

      <form>
        <Controller
          name="name"
          control={form.control}
          render={({ field }) => <input {...field} />}
        />

        {false && (
          <Controller
            name="optional"
            control={form.control}
            render={({ field }) => <input {...field} />}
          />
        )}
      </form>
    </>
  );
}

export default App;
