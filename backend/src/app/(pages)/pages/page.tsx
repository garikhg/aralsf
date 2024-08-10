import React from 'react';import AdminLayout from "@/_components/AdminLayout";import prisma from '@/lib/prisma';import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";export default async function Pages() {    const posts = await prisma.post.findMany({        where: {published: true},        include: {            author: {                select: {name: true},            },        },    });    return (        <AdminLayout>            <Table>                <TableCaption>A list of your recent invoices.</TableCaption>                <TableHeader>                    <TableRow>                        <TableHead>#ID</TableHead>                        <TableHead>Title</TableHead>                        <TableHead>Author</TableHead>                        <TableHead>Status</TableHead>                        <TableHead>Date</TableHead>                        <TableHead>Action</TableHead>                    </TableRow>                </TableHeader>                <TableBody>                    {posts.length > 0 && posts.map((post) => (                        <TableRow key={post.id}>                            <TableCell>#{post?.id}</TableCell>                            <TableCell>{post?.title}</TableCell>                            <TableCell>{post?.author?.name}</TableCell>                            <TableCell>                                {post?.published ? 'Published' : 'Draft'}                            </TableCell>                            <TableCell>Date</TableCell>                            <TableCell>Action</TableCell>                        </TableRow>                    ))}                    <TableRow>                        <TableCell>ID</TableCell>                        <TableCell>Title</TableCell>                        <TableCell>Author</TableCell>                        <TableCell>Status</TableCell>                        <TableCell>Date</TableCell>                        <TableCell>Action</TableCell>                    </TableRow>                </TableBody>            </Table>        </AdminLayout>    );};