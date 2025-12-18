"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import axios from "axios";

export default function ContactForm() {
	const [data, setData] = useState({
		name: "",
		company: "",
		email: "",
		phone: "",
		quantity: "",
		message: ""
	});

	const onChangeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData({
			...data,
			[name]: value
		});
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("name", data.name);
		formData.append("company", data.company);
		formData.append("email", data.email);
		formData.append("phone", data.phone);
		formData.append("quantity", data.quantity);
		formData.append("message", data.message);

		try {
			const response = await axios.post("/api/touch", formData);
			if (response.data.success) {
				toast.success(response.data.msg);
				setData({
					name: "",
					company: "",
					email: "",
					phone: "",
					quantity: "",
					message: ""
				});
			} else {
				toast.error(response.data.msg);
			}
		} catch (error) {
			toast.error("Error Submitting Info");
		}
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<div className="w-full rounded-lg border shadow-md space-y-6 p-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label htmlFor="name" className="block mb-2.5 text-sm font-medium">
							Name<span className="pl-1 text-red-500">*</span>
						</label>
						<Input id="name" name="name" type="text" value={data.name} onChange={onChangeHandler} required />
					</div>
					<div>
						<label htmlFor="company" className="block mb-2.5 text-sm font-medium">
							Company
						</label>
						<Input id="company" name="company" type="text" value={data.company} onChange={onChangeHandler} />
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label htmlFor="email" className="block mb-2.5 text-sm font-medium">
							Email<span className="pl-1 text-red-500">*</span>
						</label>
						<Input id="email" name="email" type="email" value={data.email} onChange={onChangeHandler} required />
					</div>
					<div>
						<label htmlFor="phone" className="block mb-2.5 text-sm font-medium">
							Phone
						</label>
						<Input id="phone" name="phone" type="tel" value={data.phone} onChange={onChangeHandler} />
					</div>
				</div>
				<div>
					<label htmlFor="quantity" className="block mb-2.5 text-sm font-medium">
						Quote Quantity
					</label>
					<Select onValueChange={(value) => setData({ ...data, quantity: value })} value={data.quantity}>
						<SelectTrigger id="quantity" name="quantity">
							<SelectValue placeholder="Select" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="300">300</SelectItem>
							<SelectItem value="500">500</SelectItem>
							<SelectItem value="750">750</SelectItem>
							<SelectItem value="1000">1000</SelectItem>
							<SelectItem value="1500">1500</SelectItem>
							<SelectItem value="2000">2000</SelectItem>
							<SelectItem value="3000">3000</SelectItem>
							<SelectItem value="5000">5000</SelectItem>
							<SelectItem value="other">Other</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					<label htmlFor="message" className="block mb-2.5 text-sm font-medium">
						Message<span className="pl-1 text-red-500">*</span>
					</label>
					<Textarea id="message" name="message" value={data.message} onChange={onChangeHandler} className="min-h-[180px]" required />
				</div>
				<div className="flex flex-col space-y-2 pt-2">
					<Button type="submit">Get Free Quote</Button>
					<div className="text-xs text-muted-foreground">
						View our{" "}
						<Link href="/privacy-policy" className="underline hover:text-foreground">
							privacy policy
						</Link>
						.
					</div>
				</div>
			</div>
		</form>
	);
}
