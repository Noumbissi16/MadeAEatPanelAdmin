import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { loginFormSchema } from "@/lib/validations";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "@/redux/slice/userSlice";
import { IUserDataLogin } from "@/types";
import axios from "axios";
import { useState } from "react";
import Loading from "@/components/shared/Loader";

function SigninForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      agency: "",
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
    setIsLoading(true);
    setError("");
    try {
      const result = await axios.post(
        "https://api-madeaeat.vercel.app/api/v1/auth/agence/signin-agence",
        values
      );
      const data = result.data;
      const user = {
        ...values,
        token: data.token,
        password: null,
      };
      // localStorage.setItem("token", data.token);
      dispatch(createUser(user));
      navigate("/");
    } catch (error: any) {
      console.log(error.response.data);
      setError(error.response.data.msg);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-background ">
      <Card className="w-11/12 max-w-lg shadow-md hover:shadow-lg border-none">
        <CardHeader>
          {error && <p className="text-center text-red-400 mb-1">{error}</p>}
          <CardTitle className="text-2xl font-bold text-center mb-2">
            Connecter vous a votre compte
          </CardTitle>
          <CardDescription className="text-center">
            Bienvenue sur le panel admin de MadeAEat, <br /> Veuillez entrer vos
            informations pour poursuivre
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="agency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Agence</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-green-50 focus-visible:ring-0">
                          <SelectValue placeholder="Choisir votre agence" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="agency1">Agence 1</SelectItem>
                        <SelectItem value="agency2">Agence 2</SelectItem>
                        <SelectItem value="agency3">Agence 3</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">
                      Nom utilisateur
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Entrez votre nom d'utilisateur"
                        {...field}
                        className="bg-green-50 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Entrez votre email"
                        {...field}
                        className="bg-green-50 focus-visible:ring-0 "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">
                      Mot de passe
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Entrez votre mot de passe"
                        {...field}
                        className="bg-green-50 focus-visible:ring-0 "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-600 transition-colors"
              >
                {isLoading ? (
                  <div className="flex-center flex-row gap-2">
                    <Loading />
                  </div>
                ) : (
                  "Se connecter"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SigninForm;
