import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function normalizeHost(host) {
  return String(host || "")
    .replace(/^www\./, "")
    .split(":")[0]
    .toLowerCase();
}

export default async function handler(req, res) {
  try {
    const host = normalizeHost(req.headers.host);

    const { data: domainRow, error } = await supabase
      .from("tenant_domains")
      .select(
        `
        domain,
        is_primary,
        tenants (
          id,
          company_name,
          slug,
          office_email,
          phone,
          logo_url,
          status
        )
      `
      )
      .eq("domain", host)
      .single();

    if (error || !domainRow || !domainRow.tenants) {
      return res.status(404).json({
        ok: false,
        error: "No tenant found for this domain",
        host,
      });
    }

    return res.status(200).json({
      ok: true,
      host,
      tenant: domainRow.tenants,
    });
  } catch (err) {
    console.error("tenant-by-domain error:", err);

    return res.status(500).json({
      ok: false,
      error: "Server error",
    });
  }
}