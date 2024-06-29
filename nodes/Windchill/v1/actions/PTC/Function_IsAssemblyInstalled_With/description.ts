import { INodeProperties } from "n8n-workflow";

export const FunctionIsAssemblyInstalledWithDescription: INodeProperties[] = [
	{
		displayName: 'assemblyName',
		name: 'assemblyName-string(path)',
		description: 'Assembly Name - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC',
				],
				operation: [
					"GET /IsAssemblyInstalled(assemblyName='{assemblyName}')",
				],
			},
		},
		required: true,
	},
];
