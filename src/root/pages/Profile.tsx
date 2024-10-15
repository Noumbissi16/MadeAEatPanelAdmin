import { profileFormSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser } from "@/redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import Loading from "@/components/shared/Loader";
import { DEV_BACKEND_BASE_URL } from "@/constants";

const Profile = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inputRefAdmin = useRef<HTMLInputElement | null>(null);
  const inputRefResto = useRef<HTMLInputElement | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [imgAdmin, setimgAdmin] = useState<File>();
  const [selectedimgAdminUrl, setSelectedimgAdminUrl] = useState<string>(user.profileImage);

  const [imgResto, setimgResto] = useState<File>();
  const [selectedimgRestoUrl, setSelectedimgRestoUrl] = useState<string>(user.profileAgence);

  // 1. Define your form.
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user.username,
      agence: user.agency,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof profileFormSchema>) {
    setIsLoading(true);
    setError("");
    let formData = new FormData();
    // Append the file if it exists
    if (imgAdmin) {
      formData.append("profileImage", imgAdmin);
    }
    if (imgResto) {
      formData.append("profileAgence", imgResto);
    }

    // Automatically append all key-value pairs from values
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const result = await axios.post(`${DEV_BACKEND_BASE_URL}/agence/profile`,
        formData,
        {
          headers: {
            "Authorization": `Bearer ${user.token}`
          }
        }
      )

      dispatch(updateUser(result.data.user))
      navigate("/")

    } catch (error: any) {
      console.log(error.response.data)
      setError(error.response.data);
    } finally {
      setIsLoading(false)
    }

  }

  function handleImageClickAdmin() {
    // Check if inputRef.current exists and is not null before accessing it
    if (inputRefAdmin.current) {
      inputRefAdmin.current.click();
    }
  }

  function handleImageInputAdmin(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setimgAdmin(file);
      setSelectedimgAdminUrl(URL.createObjectURL(file));
    }
  }

  function handleImageClickResto() {
    // Check if inputRef.current exists and is not null before accessing it
    if (inputRefResto.current) {
      inputRefResto.current.click();
    }
  }

  function handleImageInputResto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setimgResto(file);
      setSelectedimgRestoUrl(URL.createObjectURL(file));
    }
  }

  return (
    <main>
      <h1 className="title">Profile</h1>
      {error && <p className="my-4 text-red-400 mb-1">{error}</p>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex">
            <img
              src={
                selectedimgAdminUrl
                  ? selectedimgAdminUrl
                  : "/assets/images/DefaultProfil.jpg"
              }
              alt="profile administrateur"
              className="rounded-full w-[150px] h-[150px] aspect-square object-cover"
            />
            <input
              type="file"
              className="hidden"
              ref={inputRefAdmin}
              accept="image/*"
              onChange={handleImageInputAdmin}
            />

            <button
              onClick={handleImageClickAdmin}
              type="button"
              className="ml-6"
            >
              Modifier le profile
            </button>
          </div>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom gerant</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agence"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Localisation agence</FormLabel>
                <FormControl>
                  <Input placeholder="Yaounde" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="relative overflow-hidden    rounded-md">
            <img
              src={
                selectedimgRestoUrl
                  ? selectedimgRestoUrl
                  : "/assets/images/DefaultProfil.jpg"
              }
              alt="profile restaurant"
              className="w-full   h-[250px] aspect-square object-cover"
            />
            <input
              type="file"
              className="hidden"
              ref={inputRefResto}
              accept="image/*"
              onChange={handleImageInputResto}
            />

            <button
              onClick={handleImageClickResto}
              type="button"
              className="absolute bottom-0 bg-green-400/85 text-white w-full h-12"
            >
              Modifier le profile
            </button>
          </div>

          <div className="flex flex-row-reverse max-sm:flex-col gap-3">
            <Button type="submit" className="">
              {isLoading ? (
                <div className="flex-center flex-row gap-2">
                  <Loading />
                </div>
              ) : (
                "Valider"
              )}
            </Button>
            <Button type="button" className="" variant={"outline"} onClick={() => navigate("/")}>
              Annuler
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
};

export default Profile;
