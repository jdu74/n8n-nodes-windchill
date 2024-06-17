import { INodeProperties } from "n8n-workflow";

export const PtcProdPlatformMgmtVariantSpecificationFunctionIsCheckoutAllowedDescription: INodeProperties[] = [
	{
		displayName: 'VariantSpecificationId',
		name: 'VariantSpecificationId-string(path)',
		description: 'Variant Specification ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdPlatformMgmt',
				],
				operation: [
					"GET /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.IsCheckoutAllowed()",
				],
			},
		},
		required: true,
	},
];
